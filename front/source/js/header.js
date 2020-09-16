import { $, fetch_get, fetch_post } from '../utils/tools.js';

export default class {
    constructor(isLogin){
        this.init(isLogin);
    }
    async init(isLogin){
        await this.makeLayout(isLogin);
        this.addEvent(isLogin);
    }

    async makeLayout(isLogin){
        console.log(isLogin);
        const sw = isLogin.isLogin ? `<span>${isLogin.id}</span><button type="button" id="btn_logout">로그아웃</button>` : `<button type="button" id="btn_login">로그인</button>`
        const header_layer = `
            <div class="container">
                <div class="header_title">
                    To Do 서비스
                </div>
                <nav class="header_nav">
                    ${sw}
                    <button type="button" id="btn_menu">메뉴</button>
                </nav>
            </div>
        `;
        $('#header').innerHTML = header_layer;
    }
    
    addEvent(isLogin){
        if(isLogin.isLogin){
            $("#btn_logout").addEventListener('click', this.logoutHandler);
        } else{
            $("#btn_login").addEventListener('click', this.loginHandler);
        }
    }

    async logoutHandler(){
        const logout = await fetch_get('/api/member/logout');
        console.log(logout);
        location.reload();
    }

    async loginHandler(){
        const login = await fetch_post('/api/member/login');
        console.log(login);
        location.reload();
    }

}

