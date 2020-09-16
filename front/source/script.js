import { $ } from './utils/tools.js';

export function init(){
    const init_main = `
        <div>
            <button type="button" id='btn_member'>member 조회</button>
            <button type="button" id='btn_rcolumn'>rcolumn 조회</button>
            <button type="button" id='btn_card'>card 조회</button>
        </div>
        <div>
            <button type="button" id='btn_insert'>post</button>
            <button type="button" id='btn_update'>put</button>
            <button type="button" id='btn_delete'>delete</button>
        </div>
    `;
    $('#main').innerHTML = init_main;

    $('#btn_member').addEventListener('click', fetch_data);
    $('#btn_rcolumn').addEventListener('click', fetch_data);
    $('#btn_card').addEventListener('click', fetch_data);

    $('#btn_insert').addEventListener('click', fetch_post);
    $('#btn_update').addEventListener('click', fetch_put);
    $('#btn_delete').addEventListener('click', fetch_delete);
}

async function fetch_data(e){
    let response, body;

    switch(e.currentTarget){
        case $('#btn_member'):
            response = await fetch('/users');
            body = await response.json();
            // console.log(body);
            $('#main').innerHTML = JSON.stringify(body);
            break;
        case $('#btn_rcolumn'):
            response = await fetch('/rcolumn');
            body = await response.json();
            // console.log(body);
            $('#main').innerHTML = JSON.stringify(body);
            break;
        case $('#btn_card'):
            response = await fetch('/card');
            body = await response.json();
            // console.log(body);
            $('#main').innerHTML = JSON.stringify(body);
            break;
        default:
            alert('no target for fetch');
            break;
    }
}

async function fetch_post(){
    const data = {id:'user2', pw:'1234', mname:'사용자2'};
    const response = await fetch('/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    const body = await response.json();
    console.log(body);
    alert(JSON.stringify(body));
}

async function fetch_put(){
    const data = {id:'user2', pw:'1234', mname:'사용자2'};
    const response = await fetch('/users', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    const body = await response.json();
    console.log(body);
    alert(JSON.stringify(body));
}

async function fetch_delete(){
    const data = {id:'user2', pw:'1234', mname:'사용자2'};
    const response = await fetch('/users', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    const body = await response.json()
    // console.log(body);
    alert(JSON.stringify(body));
}
