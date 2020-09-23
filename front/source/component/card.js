import { $, $All, fetch_put } from '../utils/tools.js';

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
        $All('.memo_card').forEach((e) => {
            e.addEventListener('dragstart', this.dragStart);
            e.addEventListener('dragend', this.dragEnd);
        });

        $All('.rcolumn_cards').forEach((e) => {
            e.addEventListener('dragover', this.dragOver.bind(this));
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
        const fromColno = dragEl.parentElement.parentElement.dataset.colno;
        const toColno = targetCol.parentElement.dataset.colno;
        const currCardno = dragEl.dataset.cardno;
        const toNextCardno = afterElement ? afterElement.dataset.cardno : null;
        // console.log(afterElement);
        const toPrevCardno = afterElement
            ? afterElement.previousSibling
                ? afterElement.previousSibling.dataset.cardno
                : null
            : targetCol.lastChild.dataset.cardno;
        // console.log(targetCol.lastChild);
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
        console.log(data);
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
