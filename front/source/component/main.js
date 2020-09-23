import { $, fetch_get } from '../utils/tools.js';

import Rcolumn from './rcolumn.js';
const rcolObj = new Rcolumn();

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
        const divs = rcolObj.render(rcolumns);
        const main_layer = `
            <div class="container">
                ${divs}
            </div>
        `;
        $('#main').innerHTML = main_layer;
    }

    // rcolumnsDivs(rcolumns) {
    //     let divs = '';
    //     divs += "<div class='rcolumn_divs'>";
    //     rcolumns.forEach((rcol) => {
    //         divs += `<div class='rcolumn' data-colno='${rcol.colno}' data-corder='${rcol.corder}'>`;
    //         divs += `<div class='rcolumn_title' data-colno='${rcol.colno}' data-corder='${rcol.corder}'>
    //                     <span>${rcol.cards.length}</span>
    //                     <h2>${rcol.cname}</h2>
    //                     <button type='button' class='btn_addCardForm'>+</button><button type='button' class='btn_deleteColumn'>X</button>
    //                 </div>`;
    //         divs += `<div class='rcolumn_cards'>`;
    //         rcol.cards.forEach((card) => {
    //             divs += cardObj.render(card);
    //         });
    //         divs += `</div>`;
    //         divs += '</div>';
    //     });
    //     divs += `<div class='add_rcolumn'>
    //                 <button type='button' id='btn_addColumn'>+ 칼럼 추가</button>
    //             </div>`;
    //     divs += '</div>';
    //     return divs;
    // }

    addEvent() {
        rcolObj.addEvent();
    }

    // async addColumnHandler() {
    //     // alert('칼럼 등록');
    //     const data = {
    //         cname: '칼럼 추가 테스트',
    //         corder: 1,
    //     };
    //     const add = await fetch_post('/api/rcolumn/', data);
    //     console.log(add);
    //     location.reload(); // 페이지 리로드 하지 말고 업데이트 하도록 할 것 // appendchild
    // }

    // async deleteColumnHandler(e) {
    //     // alert('칼럼 삭제');
    //     const colno = e.currentTarget.parentElement.dataset.colno;
    //     const del = await fetch_delete(`/api/rcolumn/${colno}`);
    //     console.log(del);
    //     location.reload(); // 페이지 리로드 하지 말고 업데이트 하도록 할 것
    // }
}
