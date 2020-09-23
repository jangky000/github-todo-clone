import { $, fetch_get } from '../utils/tools.js';

export default class {
    constructor(isLogin) {
        this.isLogin = isLogin;
        this.init();
    }
    async init() {
        this.render();
        this.addEvent();
    }

    render() {
        const menu = this.isLogin.isLogin ? this.menu_layer() : ``;
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
        }
    }

    async logoutHandler() {
        const logout = await fetch_get('/api/member/logout');
        console.log(logout);
        location.reload();
    }

    menu_layer() {
        let divs = '';
        divs += `<div class='menu_layer'>`;
        divs += `<div class='menu_title'>`;
        divs += `<h2>Menu</h2>`;
        divs += `<button type='button' class='menu_close'>x</button>`;
        divs += `</div>`;
        divs += `<ul class='menu_list'>`;
        divs += `<li>OOO 님 반갑습니다.</li>`;
        divs += `<li><span class='spn_logout'>로그아웃</span></li>`;
        divs += `</ul>`;
        divs += `<div class='menu_title'><h2>Activity</h2></div>`;
        divs += `<ul class='menu_list'>`;
        divs += `<li>move from a to b</li>`;
        divs += `<li>a is created</li>`;
        divs += `</ul>`;
        divs += `</div>`;
        return divs;
    }

    toggleMenu() {
        const layer = $('.menu_layer');
        layer.classList.toggle('show');
    }
}
