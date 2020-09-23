import { $, $All, fetch_delete, fetch_post } from '../utils/tools.js';

import Card from './card.js';
const cardObj = new Card();

export default class {
    constructor(isLogin) {
        this.isLogin = isLogin;
    }

    render(rcolumns) {
        let divs = '';
        divs += "<div class='rcolumn_divs'>";
        rcolumns.forEach((rcol) => {
            divs += `<div class='rcolumn' data-colno='${rcol.colno}' data-corder='${rcol.corder}'>`;
            divs += this.rcolumnShape(rcol);
            divs += '</div>';
        });
        divs += `<div class='add_rcolumn'>
                    <button type='button' id='btn_addColumn'>+ 칼럼 추가</button>
                </div>`;
        divs += '</div>';
        return divs;
    }

    rcolumnShape(rcol) {
        let divs = '';
        divs += `<div class='rcolumn_title' data-colno='${rcol.colno}' data-corder='${rcol.corder}'>`;
        divs += `<span>${rcol.cards.length}</span>`;
        divs += `<h2>${rcol.cname}</h2>`;
        divs += `<button type='button' class='btn_deleteColumn btn_columnTitle'>x</button><button type='button' class='btn_addCardForm btn_columnTitle'>+</button>`;
        divs += this.createCardForm();
        divs += `</div>`;
        divs += `<div class='rcolumn_cards'>`;
        rcol.cards.forEach((card) => {
            divs += cardObj.render(card);
        });
        divs += `</div>`;
        return divs;
    }

    createCardForm() {
        let divs = '';
        divs += `<div class='createCardForm hidden'>`;
        divs += `<textarea class='createCardText' placeholder='메모 입력'></textarea>`;
        divs += `<div>`;
        divs += `<button type='button' class='btn_cardCreate btn_cardDisabled'>입력</button>`;
        divs += `<button type='button' class='btn_cardCancel'>취소</button>`;
        divs += `</div>`;
        divs += `</div>`;

        return divs;
    }

    addEvent() {
        $('#btn_addColumn').addEventListener(
            'click',
            this.addColumnHandler.bind(this)
        );

        $All('.btn_deleteColumn').forEach((e) =>
            e.addEventListener('click', this.deleteColumnHandler)
        );

        $All('.btn_addCardForm').forEach((e) =>
            e.addEventListener('click', this.addCardForm)
        );

        $All('.createCardText').forEach((e) =>
            e.addEventListener('input', this.checkTextarea)
        );

        $All('.btn_cardCreate').forEach((e) =>
            e.addEventListener('click', this.cardCreate.bind(this))
        );

        $All('.btn_cardCancel').forEach((e) =>
            e.addEventListener('click', this.cardCancel)
        );

        cardObj.addEvent();
    }

    async addColumnHandler() {
        const data = {
            cname: '새 칼럼',
            corder: 1,
            cards: [],
        };
        const add = await fetch_post('/api/rcolumn/', data);
        console.log(add);
        this.addRcolumn(data, add);
    }

    addRcolumn(data, add) {
        const rcolumnBox = document.createElement('div');
        rcolumnBox.classList.add('rcolumn');
        rcolumnBox.dataset.colno = add.insertId;
        rcolumnBox.dataset.corder = data.corder;
        data.colno = add.insertId;
        rcolumnBox.innerHTML = this.rcolumnShape(data);
        const addBox = $('.add_rcolumn');
        $('.rcolumn_divs').insertBefore(rcolumnBox, addBox);
        $('.btn_deleteColumn', rcolumnBox).addEventListener(
            'click',
            this.deleteColumnHandler
        );
    }

    async deleteColumnHandler(e) {
        const currTarget = e.currentTarget;
        const colno = currTarget.closest('.rcolumn').dataset.colno;
        await fetch_delete(`/api/rcolumn/${colno}`);

        currTarget.closest('.rcolumn').remove();
    }

    addCardForm(e) {
        const currRcolTitle = e.currentTarget.closest('.rcolumn_title');
        $('.createCardForm', currRcolTitle).classList.toggle('hidden');
    }

    checkTextarea(e) {
        const currTarget = e.target;
        const cardForm = currTarget.closest('.createCardForm');
        const btn = $('.btn_cardCreate', cardForm);
        const text = currTarget.value;
        if (text) {
            if (btn.classList.contains('btn_cardDisabled')) {
                btn.classList.toggle('btn_cardDisabled');
            }
        } else {
            if (!btn.classList.contains('btn_cardDisabled')) {
                btn.classList.toggle('btn_cardDisabled');
            }
        }
    }

    async cardCreate(e) {
        const currRcolTitle = e.currentTarget.closest('.rcolumn_title');
        const text = $('.createCardText', currRcolTitle).value;
        const colno = currRcolTitle.closest('.rcolumn').dataset.colno;
        const data = {
            memno: this.isLogin.memno,
            colno: colno,
            ccontent: text,
            corder: 0,
        };
        const add = await fetch_post('/api/card/', data);
        console.log(add);
        location.reload();
    }

    cardCancel(e) {
        const currRcolTitle = e.currentTarget.closest('.rcolumn_title');
        $('.createCardForm', currRcolTitle).classList.toggle('hidden');
    }
}
