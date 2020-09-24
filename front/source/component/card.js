import { $, $All, fetch_put, fetch_delete } from '../utils/tools.js';
import Modal from './modal.js';

export default class {
    constructor() {
        this.modal = new Modal();
    }

    render(card) {
        let divs = '';
        divs += `<div class='memo_card draggable' draggable="true" data-cardno='${card.cardno}'>`;
        divs += `<div class='card_delete'>x</div>`;
        divs += `<div class='card_content'>${card.ccontent}</div>`;
        divs += `<div class='card_author'>${card.id}</div>`;
        divs += `</div>`;
        return divs;
    }

    addEvent() {
        $All('.memo_card').forEach((e) => {
            e.addEventListener('dragstart', this.dragStart);
            e.addEventListener('dragend', this.dragEnd);
            e.addEventListener('dblclick', this.showUpdateModal.bind(this));
        });

        $All('.rcolumn_cards').forEach((e) => {
            e.addEventListener('dragover', this.dragOver.bind(this));
        });

        $All('.card_delete').forEach((e) => {
            e.addEventListener('click', this.cardDelete);
        });
    }

    dragStart(e) {
        console.log('dragStart');
        e.currentTarget.classList.add('dragging');
        e.currentTarget.classList.remove('draggable');
    }

    dragEnd(e) {
        console.log('dragEnd');
        e.currentTarget.classList.remove('dragging');
        e.currentTarget.classList.add('draggable');
    }

    dragOver(e) {
        e.preventDefault(); // 이동 금지 커서 모양을 제거해 줌
        // console.log('dragOver');
        const dragEl = $('.dragging');
        const afterElement = this.getDragAfterElement(
            e.currentTarget,
            e.clientY
        );
        if (
            e.currentTarget.contains(dragEl) &&
            dragEl.nextSibling == afterElement
        ) {
            return;
        }
        dragEl.classList.add('init_animation');

        this.actionLog(dragEl, e.currentTarget, afterElement);

        if (afterElement) {
            e.currentTarget.insertBefore(dragEl, afterElement);
        } else {
            e.currentTarget.appendChild(dragEl);
        }
        setTimeout(() => {
            dragEl.classList.remove('init_animation');
        }, 1000);
    }

    actionLog(dragEl, targetCol, afterElement) {
        const fromCol = dragEl.closest('.rcolumn');
        const fromColno = fromCol.dataset.colno;
        const toCol = targetCol.closest('.rcolumn');
        const toColno = toCol.dataset.colno;
        const currCardno = dragEl.dataset.cardno;
        const toNextCardno = afterElement ? afterElement.dataset.cardno : null;
        const toPrevCardno = afterElement
            ? afterElement.previousSibling
                ? afterElement.previousSibling.dataset.cardno
                : null
            : targetCol.lastChild
            ? targetCol.lastChild.dataset.cardno
            : null;
        console.log(
            `${fromColno} 칼럼의 ${currCardno}를 ${toColno} 칼럼으로 이동`
        );
        const data = {
            fromColno: fromColno,
            toColno: toColno,
            currCardno: currCardno,
            toNextCardno: toNextCardno,
            toPrevCardno: toPrevCardno,
        };
        fetch_put('/api/card', data);

        // 숫자 업데이트
        const prespan = $('.rcolumn_cnt', fromCol);
        prespan.innerHTML = parseInt(prespan.textContent) - 1;

        const nextspan = $('.rcolumn_cnt', toCol);
        nextspan.innerHTML = parseInt(nextspan.textContent) + 1;
    }

    getDragAfterElement(container, y) {
        const draggableElements = [
            ...$All('.draggable:not(.dragging)', container),
        ];
        return draggableElements.reduce(
            (closest, child) => {
                const box = child.getBoundingClientRect();
                const offset = y - box.top - box.height / 2;
                if (offset < 0 && offset > closest.offset) {
                    return { offset: offset, element: child };
                } else {
                    return closest;
                }
            },
            { offset: Number.NEGATIVE_INFINITY }
        ).element;
    }
    async cardDelete(e) {
        const sw = confirm('선택한 카드를 삭제하시겠습니까?');
        if (sw) {
            const memo_card = e.currentTarget.closest('.memo_card');
            const cardno = memo_card.dataset.cardno;
            const result = await fetch_delete(`api/card/${cardno}`);
            console.log(result);

            // 숫자 업데이트
            const rcolumn = memo_card.closest('.rcolumn');
            const span = $('.rcolumn_cnt', rcolumn);
            span.innerHTML = parseInt(span.textContent) - 1;

            // 객체 삭제
            memo_card.remove(); // 이벤트도 같이 삭제?
        }
    }

    showUpdateModal(e) {
        const modal = $('.modal');
        if (modal.classList.contains('hidden')) {
            modal.classList.toggle('hidden');

            // const card_content = e.currentTarget;
            const memo_card = e.currentTarget;
            const card_content = $('.card_content', memo_card);
            const data = {
                ccontent: card_content.textContent,
                cardno: memo_card.dataset.cardno,
            };
            this.modal.insertEditCard(data);
        }
    }
}
