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

        $All('.btn_deleteColumn').forEach((e) =>
            e.addEventListener('click', this.deleteColumnHandler)
        );
        cardObj.addEvent();
    }

    async addColumnHandler() {
        // alert('칼럼 등록');
        const data = {
            cname: '칼럼 추가 테스트',
            corder: 1,
        };
        const add = await fetch_post('/api/rcolumn/', data);
        console.log(add);
        location.reload(); // 페이지 리로드 하지 말고 업데이트 하도록 할 것 // appendchild
    }

    async deleteColumnHandler(e) {
        // alert('칼럼 삭제');
        const colno = e.currentTarget.parentElement.dataset.colno;
        const del = await fetch_delete(`/api/rcolumn/${colno}`);
        console.log(del);
        location.reload(); // 페이지 리로드 하지 말고 업데이트 하도록 할 것
    }
}
