import { $, fetch_post } from '../utils/tools.js';

export default class {
    constructor() {}

    render() {
        let divs = '';
        divs += `<div class="login_container">`;
        divs += `<h2 class='login_title'>로그인</h2>`;
        divs += `<input type="text" id="login_id" name="id" placeholder="아이디" required="" autofocus>`;
        divs += `<input type="password" id="login_pw" name="pw" placeholder="패스워드" required="">`;
        divs += `<button type="button" id='btn_login'>로그인</button>`;
        divs += `</div>`;
        return divs;
    }

    addEvent() {
        $('#btn_login').addEventListener('click', this.loginHandler);
    }

    async loginHandler() {
        const id = $('#login_id').value;
        const pw = $('#login_pw').value;
        const data = { id: id, pw: pw };
        const login = await fetch_post('/api/member/login', data);
        console.log(login);
        location.reload();
    }
}
