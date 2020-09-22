import { fetch_get } from '../utils/tools.js';
import Header from './header.js';
import Main from './main.js';

export default class {
    constructor() {
        this.init();
    }

    async init() {
        const isLogin = await fetch_get('/api/member/isLogin'); // isLogin:true/false, id:user1
        // console.log(isLogin);
        new Header(isLogin);
        new Main(isLogin);
    }
}
