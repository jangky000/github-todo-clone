import { $, $All, fetch_delete, fetch_post } from '../utils/tools.js';

import Card from './card.js';
const cardObj = new Card();

export default class {
    constructor() {}

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
        divs += `<div class='rcolumn_title' data-colno='${rcol.colno}' data-corder='${rcol.corder}'>
                    <span>${rcol.cards.length}</span>
                    <h2>${rcol.cname}</h2>
                    <button type='button' class='btn_addCardForm'>+</button><button type='button' class='btn_deleteColumn'>X</button>
                </div>`;
        divs += `<div class='rcolumn_cards'>`;
        rcol.cards.forEach((card) => {
            divs += cardObj.render(card);
        });
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
        const del = await fetch_delete(`/api/rcolumn/${colno}`);
        console.log(del);
        currTarget.closest('.rcolumn').remove();
    }
}
