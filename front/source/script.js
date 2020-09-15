import { $ } from './utils/tools.js';

export function init(){
    const init_main = `
        <button type="button" id='member'>member 조회</button>
        <button type="button" id='rcolumn'>rcolumn 조회</button>
        <button type="button" id='card'>card 조회</button>
    `;
    $('#main').innerHTML = init_main;
}
