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
        rcolumns.forEach(e => {
            divs += "<div class='rcolumn'>";
            divs += `<div class='rcolumn_title' data-colno='${e.colno}' data-corder='${e.corder}'>${e.cname}</div>`;
            divs += `<div class='rcolumn_cards'>카드 공간</div>`;
            divs += "</div>";
        });
        divs += "<div class='rcolumn'>";
        divs += "칼럼 추가"
        divs += "</div>";
        divs += "</div>";
        return divs;
    }

    addEvent(isLogin){
        //
    }
}