import {
    $,
    $All,
    fetch_get,
    fetch_post,
    fetch_delete,
} from '../utils/tools.js';

export default class {
    constructor(isLogin) {
        this.isLogin = isLogin;
        this.init();
    }

    async init() {
        await this.render();
        this.addEvent();
    }

    async render() {
        const rcolumns = await fetch_get('/api/rcolumn/');
        // console.log(rcolumns);
        const divs = this.rcolumnsDivs(rcolumns);
        const main_layer = `
            <div class="container">
                ${divs}
            </div>
        `;
        $('#main').innerHTML = main_layer;
    }

    rcolumnsDivs(rcolumns) {
        let divs = '';
        divs += "<div class='rcolumn_divs'>";
        rcolumns.forEach((rcol) => {
            divs += "<div class='rcolumn'>";
            divs += `<div class='rcolumn_title' data-colno='${rcol.colno}' data-corder='${rcol.corder}'>
                        <span>${rcol.cards.length}</span>
                        <h2>${rcol.cname}</h2>
                        <button type='button' class='btn_addCardForm'>+</button><button type='button' class='btn_deleteColumn'>X</button>
                    </div>`;
            divs += `<div class='rcolumn_cards'>`;
            rcol.cards.forEach((card) => {
                divs += `<div class='memo_card draggable' draggable="true" data-cardno='${card.cardno}'>`;
                divs += `<div class='card_menu'>...</div>`;
                divs += `<div class='card_content'>${card.ccontent}</div>`;
                divs += `<div class='card_author'>${card.id}</div>`;
                divs += `</div>`;
            });
            divs += `</div>`;
            divs += '</div>';
        });
        divs += `<div class='add_rcolumn'>
                    <button type='button' id='btn_addColumn'>+ 칼럼 추가</button>
                </div>`;
        divs += '</div>';
        return divs;
    }

    addEvent() {
        $('#btn_addColumn').addEventListener('click', this.addColumnHandler);
        $All('.btn_addCardForm').forEach((e) =>
            e.addEventListener('click', this.addCardFormHandler.bind(this))
        );
        $All('.btn_deleteColumn').forEach((e) =>
            e.addEventListener('click', this.deleteColumnHandler)
        );
        $All('.memo_card').forEach((e) => {
            e.addEventListener('dragstart', this.dragStart);
            e.addEventListener('dragend', this.dragEnd);
        });
        $All('.rcolumn_cards').forEach((e) => {
            e.addEventListener('dragover', this.dragOver.bind(this));
            // e.addEventListener('dragenter', this.dragEnter.bind(this));
            // e.addEventListener('dragleave', this.dragLeave);
            // e.addEventListener('drop', this.dragDrop);
        });
    }

    async addColumnHandler() {
        alert('칼럼 등록');
        const data = {
            cname: '칼럼 추가 테스트',
            corder: 1,
        };
        const add = await fetch_post('/api/rcolumn/', data);
        console.log(add);
        location.reload(); // 페이지 리로드 하지 말고 업데이트 하도록 할 것
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

    async deleteColumnHandler(e) {
        alert('칼럼 삭제');
        const colno = e.currentTarget.parentElement.dataset.colno;
        const del = await fetch_delete(`/api/rcolumn/${colno}`);
        console.log(del);
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
        if (afterElement) {
            e.currentTarget.insertBefore(dragEl, afterElement);
        } else {
            e.currentTarget.appendChild(dragEl);
        }
        setTimeout(() => {
            dragEl.classList.remove('init_animation');
        }, 1000);
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
    // dragEnter(e) {
    //     console.log(e);
    //     console.log('dragEnter');
    // }

    // dragLeave(e) {
    //     console.log(e);
    //     console.log('dragLeave');
    // }

    // dragDrop(e) {
    //     e.preventDefault();
    //     console.log(e);
    //     console.log('dragDrop');
    // }
}
