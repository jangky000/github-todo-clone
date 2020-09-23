import { $, fetch_get } from '../utils/tools.js';

import Rcolumn from './rcolumn.js';
const rcolObj = new Rcolumn();

import Login from './login.js';
const loginObj = new Login();

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
        const divs = this.isLogin.isLogin
            ? rcolObj.render(rcolumns)
            : loginObj.render();
        const main_layer = `
            <div class="container">
                ${divs}
            </div>
        `;
        $('#main').innerHTML = main_layer;
    }

    addEvent() {
        if (this.isLogin.isLogin) {
            rcolObj.addEvent();
        } else {
            loginObj.addEvent();
        }
    }
}
