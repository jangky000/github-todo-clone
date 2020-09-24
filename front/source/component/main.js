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
        let main_layout;

        if (this.isLogin.isLogin) {
            const rcolumns = await fetch_get('/api/rcolumn/');
            main_layout = `
                <div class="container">
                    ${this.rcolObj.render(rcolumns)}
                </div>
                ${this.modal.render()}`;
        } else {
            main_layout = `
                <div class="container">
                    ${this.loginObj.render()}
                </div>`;
        }
        $('#main').innerHTML = main_layout;
    }

    addEvent() {
        if (this.isLogin.isLogin) {
            this.rcolObj.addEvent();
            this.modal.addEvent();
        } else {
            this.loginObj.addEvent();
        }
    }
}
