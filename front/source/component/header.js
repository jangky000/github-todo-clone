import { $, fetch_get } from '../utils/tools.js';

export default class {
    constructor(isLogin) {
        this.isLogin = isLogin;
        this.interval;
        this.init();
    }
    async init() {
        await this.render();
        this.addEvent();
    }

    async render() {
        const menu = this.isLogin.isLogin ? await this.menu_layer() : ``;
        const header_layer = `
            <div class="container flex_header">
                <div class="header_title"><h1>To Do 서비스</h1></div>
                <nav class="header_nav">
                    <button type="button" id="btn_menu">Menu</button>
                </nav>
                ${menu}
            </div>
        `;
        $('#header').innerHTML = header_layer;
    }

    addEvent() {
        if (this.isLogin.isLogin) {
            $('#btn_menu').addEventListener('click', this.toggleMenu);
            $('.menu_close').addEventListener('click', this.toggleMenu);
            $('.spn_logout').addEventListener('click', this.logoutHandler);
            $('.spn_darkmode').addEventListener('click', this.darkmodeHandler);
            $('.spn_clubmode').addEventListener('click', this.clubmodeHandler);
        }
    }

    async logoutHandler() {
        const logout = await fetch_get('/api/member/logout');
        console.log(logout);
        location.reload();
    }

    darkmodeHandler() {
        $('html').classList.toggle('darkmode');
    }

    clubmodeHandler() {
        const html = $('html');
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
            html.style = '';
            return;
        }
        if (confirm('파티가 시작됩니다!')) {
            this.interval = setInterval(() => {
                html.style = `
                        background-color: rgba(
                            ${Math.random() * 255}, 
                            ${Math.random() * 255}, 
                            ${Math.random() * 255}, 
                            ${Math.random() * 255});
                        filter: invert(1) hue-rotate(${Math.random() * 180}deg);
                        `;
            }, 10);
        }
    }

    async menu_layer() {
        let divs = '';
        divs += `<div class='menu_layer'>`;
        divs += `<div class='menu_title'>`;
        divs += `<h2>Menu</h2>`;
        divs += `<button type='button' class='menu_close'>x</button>`;
        divs += `</div>`;
        divs += `<ul class='menu_list'>`;
        divs += `<li><strong>${this.isLogin.id}</strong> 님 반갑습니다.</li>`;
        divs += `<li><span class='spn_logout spn_hover'>로그아웃</span></li>`;
        divs += `<li><span class='spn_darkmode spn_hover'>다크모드</span></li>`;
        divs += `<li><span class='spn_clubmode spn_hover'>클럽모드</span></li>`;
        divs += `</ul>`;
        divs += `<div class='menu_title'><h2>Activity</h2></div>`;
        divs += `<ul class='menu_list'>`;
        divs += await this.logList();
        divs += `</ul>`;
        divs += `</div>`;
        return divs;
    }

    async logList() {
        const rows = await fetch_get('/api/logger');
        const listArr = rows.reduce((arr, row) => {
            switch (row.lgmode) {
                case 'CREATE':
                    arr.push(
                        `<li><a href='#'>@${this.isLogin.id}</a> created the column <a href='#'>${row.mvto}</a></li>`
                    );
                    return arr;
                case 'ADD':
                    arr.push(
                        `<li><a href='#'>@${this.isLogin.id}</a> added <a href='#'>${row.ccontent}</a> to <a href='#'>${row.mvto}</a></li>`
                    );
                    return arr;
                case 'MOVE':
                    arr.push(
                        `<li><a href='#'>@${this.isLogin.id}</a> moved <a href='#'>${row.ccontent}</a> from <a href='#'>${row.mvfrom}</a> to <a href='#'>${row.mvto}</a></li>`
                    );
                    return arr;
                case 'RENAME':
                    arr.push(
                        `<li><a href='#'>@${this.isLogin.id}</a> renamed the column <a href='#'>${row.mvfrom}</a> to <a href='#'>${row.mvto}</a></li>`
                    );
                    return arr;
                case 'UPDATE':
                    arr.push(
                        `<li><a href='#'>@${this.isLogin.id}</a> updated <a href='#'>${row.ccontent}</a></li>`
                    );
                    return arr;
                case 'DELETE':
                    arr.push(
                        `<li><a href='#'>@${this.isLogin.id}</a> deleted the column <a href='#'>${row.mvfrom}</a></li>`
                    );
                    return arr;
                case 'REMOVE':
                    arr.push(
                        `<li><a href='#'>@${this.isLogin.id}</a> removed <a href='#'>${row.ccontent}</a></li>`
                    );
                    return arr;
            }
        }, []);
        return listArr.join('');
    }

    toggleMenu() {
        const layer = $('.menu_layer');
        layer.classList.toggle('show');
    }
}
