import { $, fetch_put } from '../utils/tools.js';

export default class {
    render() {
        let divs = '';
        divs += `<div class="modal hidden">`;
        divs += `<div class="modal_overlay"></div>`;
        divs += `<div class="modal_content">`;
        // divs += this.editColumn({ cname: '할 일', colno: 1 });
        // divs += this.editCard({ ccontent: 'aaaaaaaaaaaaaaaaaaaa', cardno: 1 });
        divs += `</div>`;
        divs += `</div>`;
        return divs;
    }
    insertEditColumn(data) {
        let divs = '';
        divs += `<div class="modal_head">`;
        divs += `<h2 class="modal_h2text">edit ${data.cname}</h2>`;
        divs += `<div class='modal_close btn_naive'>x</div>`;
        divs += `</div>`;
        divs += `<div class="modal_body">`;
        divs += `<h2 class="modal_h2text">Column name<h2>`;
        divs += `<input type='text' class='modal_input' id='edit_cname' name='cname' data-colno='${data.colno}' value='${data.cname}' autofocus>`;
        divs += `<button type='button' class='btn_complete block' id='btn_columnUpdate'>Update column</button>`;
        divs += `</div>`;
        $('.modal_content').innerHTML = divs;
        // return divs;
        $('.modal_close').addEventListener('click', this.close_modal);
        $('#btn_columnUpdate').addEventListener('click', this.columnUpdate);
    }
    insertEditCard(data) {
        let divs = '';
        divs += `<div class="modal_head">`;
        divs += `<h2 class="modal_h2text">edit note</h2>`;
        divs += `<div class='modal_close btn_naive'>x</div>`;
        divs += `</div>`;
        divs += `<div class="modal_body">`;
        divs += `<h2 class="modal_h2text">Note<h2>`;
        divs += `<textarea class='modal_textarea' id='edit_ccontent' data-cardno='${data.cardno}' autofocus>${data.ccontent}</textarea>`;
        divs += `<button type='button' class='btn_complete block' id='btn_cardUpdate'>Save note</button>`;
        divs += `</div>`;
        $('.modal_content').innerHTML = divs;
        // return divs;
        $('.modal_close').addEventListener('click', this.close_modal);
        $('#btn_cardUpdate').addEventListener('click', this.cardUpdate);
    }

    addEvent() {
        $('.modal_overlay').addEventListener('click', this.close_modal);
    }

    // 모달창 닫기
    close_modal() {
        const modal = $('.modal');
        if (!modal.classList.contains('hidden')) {
            modal.classList.toggle('hidden');
            $('.modal_content').innerHTML = '';
        }
    }

    async columnUpdate() {
        const input = $('#edit_cname');
        const new_cname = input.value;
        const colno = input.dataset.colno;
        const data = { new_cname: new_cname };
        const result = await fetch_put(`/api/rcolumn/${colno}/cname`, data);
        console.log(result);
        location.reload();
    }

    async cardUpdate() {
        // console.log($('#edit_ccontent').textContent);
        // console.log($('#edit_ccontent').dataset.cardno);

        const textarea = $('#edit_ccontent');
        const new_ccontent = textarea.value;
        const cardno = textarea.dataset.cardno;
        const data = { new_ccontent: new_ccontent };
        const result = await fetch_put(`/api/card/${cardno}/ccontent`, data);
        console.log(result);
        location.reload();
    }
}
