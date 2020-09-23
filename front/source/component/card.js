import { $, $All, fetch_post, fetch_put } from '../utils/tools.js';

export default class {
    constructor() {}

    render(card) {
        let divs = '';
        divs += `<div class='memo_card draggable' draggable="true" data-cardno='${card.cardno}'>`;
        divs += `<div class='card_menu'>...</div>`;
        divs += `<div class='card_content'>${card.ccontent}</div>`;
        divs += `<div class='card_author'>${card.id}</div>`;
        divs += `</div>`;
        return divs;
    }

    addEvent() {
        $All('.btn_addCardForm').forEach((e) =>
            e.addEventListener('click', this.addCardFormHandler.bind(this))
        );

        $All('.memo_card').forEach((e) => {
            e.addEventListener('dragstart', this.dragStart);
            e.addEventListener('dragend', this.dragEnd);
        });

        $All('.rcolumn_cards').forEach((e) => {
            e.addEventListener('dragover', this.dragOver.bind(this));
        });
    }

    async addCardFormHandler(e) {
        alert('카드 등록');
        const colno = e.currentTarget.parentElement.dataset.colno;
        const data = {
            memno: this.isLogin.memno,
            colno: colno,
            ccontent: '카드 추가 테스트',
            corder: 1,
        };
        const add = await fetch_post('/api/card/', data);
        alert(add);
        location.reload(); // 페이지 리로드 하지 말고 업데이트 하도록 할 것
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
        const fromColno = dragEl.parentElement.parentElement.dataset.colno;
        const toColno = targetCol.parentElement.dataset.colno;
        const currCardno = dragEl.dataset.cardno;
        const fromNextCardno = dragEl.nextSibling
            ? dragEl.nextSibling.dataset.cardno
            : null;
        const toNextCardno = afterElement ? afterElement.dataset.cardno : null;
        console.log(afterElement);
        const toPrevCardno = afterElement
            ? afterElement.previousSibling.dataset.cardno
            : targetCol.lastChild;
        console.log(targetCol.lastChild);
        console.log(
            `${fromColno} 칼럼의 ${currCardno}를 ${toColno} 칼럼으로 이동`
        );
        console.log(`현재 카드: ${currCardno}, 다음 카드: ${toNextCardno}`);
        const data = {
            fromColno: fromColno,
            toColno: toColno,
            currCardno: currCardno,
            fromNextCardno: fromNextCardno,
            toNextCardno: toNextCardno,
            toPrevCardno: toPrevCardno,
        };
        fetch_put('/api/card', data);
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
}
