import { $, fetch_get } from '../utils/tools.js';

export default class {
    constructor(isLogin){
        this.init(isLogin);
    }

    init(isLogin){
        this.render(isLogin);
    }

    async render(isLogin){
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

    rcolumnsDivs(rcolumns){
        let divs = "";
        divs += "<div class='rcolumn_divs'>";
        rcolumns.forEach(rcol => {
            divs += "<div class='rcolumn'>";
            divs += `<div class='rcolumn_title' data-colno='${rcol.colno}' data-corder='${rcol.corder}'>
                        <span>${rcol.cards.length}</span>
                        <h2>${rcol.cname}</h2>
                    </div>`;
            divs += `<div class='rcolumn_cards'>`;
            rcol.cards.forEach(card => {
                divs += `<div class='memo_card draggable'>`;
                divs += `<div class='card_content'>${card.ccontent}</div>`;
                divs += `<div class='card_author'>${card.id}</div>`;
                divs += `</div>`;
            });
            divs += `</div>`;
            divs += "</div>";
        });
        divs += `<div class='add_rcolumn'>
                    <button type='button' id='btn_addColumn'>+ 칼럼 추가</button>
                </div>`;
        divs += "</div>";
        return divs;
    }

    addEvent(isLogin){
        //
    }
}