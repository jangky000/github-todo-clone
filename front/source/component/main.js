import { $, fetch_get } from '../utils/tools.js';
import Rcolumn from './rcolumn.js';
import Login from './login.js';
import Modal from './modal.js';

export default class {
    constructor(isLogin) {
        this.isLogin = isLogin;
        this.rcolObj = new Rcolumn(isLogin);
        this.loginObj = new Login();
        this.modal = new Modal();
        this.init();
    }

    async init() {
        await this.render();
        this.addEvent();
    }

    async render() {
        const rcolumns = await fetch_get('/api/rcolumn/');
        const divs = this.isLogin.isLogin
            ? this.rcolObj.render(rcolumns)
            : this.loginObj.render();
        // const modal = this.modal.render();
        const main_layer = `
            <div class="container">
                ${divs}
            </div>
        `;
        $('#main').innerHTML = main_layer;
    }

    addEvent() {
        if (this.isLogin.isLogin) {
            this.rcolObj.addEvent();
        } else {
            this.loginObj.addEvent();
        }
    }
}
