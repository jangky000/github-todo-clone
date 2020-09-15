import { $ } from './utils/tools.js';

export function init(){
    const init_main = `
        <button type="button" id='btn_member'>member 조회</button>
        <button type="button" id='btn_rcolumn'>rcolumn 조회</button>
        <button type="button" id='btn_card'>card 조회</button>
    `;
    $('#main').innerHTML = init_main;

    $('#btn_member').addEventListener('click', fetch_data);
    $('#btn_rcolumn').addEventListener('click', fetch_data);
    $('#btn_card').addEventListener('click', fetch_data);
}

async function fetch_data(e){
    let response, body;

    switch(e.currentTarget){
        case $('#btn_member'):
            response = await fetch('http://localhost:3000/users');
            body = await response.json();
            // console.log(body);
            $('#main').innerHTML = JSON.stringify(body);
            break;
        case $('#btn_rcolumn'):
            response = await fetch('http://localhost:3000/rcolumn');
            body = await response.json();
            // console.log(body);
            $('#main').innerHTML = JSON.stringify(body);
            break;
        case $('#btn_card'):
            response = await fetch('http://localhost:3000/card');
            body = await response.json();
            // console.log(body);
            $('#main').innerHTML = JSON.stringify(body);
            break;
        default:
            alert('no target for fetch');
            break;
    }
}