import { $, $All, fetch_delete, fetch_post } from '../utils/tools.js';

import Card from './card.js';
const cardObj = new Card();

import Modal from './modal.js';

export default class {
    constructor(isLogin) {
        this.isLogin = isLogin;
        this.modal = new Modal();
    }

    render(rcolumns) {
        let divs = '';
        divs += "<div class='rcolumn_divs'>";
        rcolumns.forEach((rcol) => {
            divs += `<div class='rcolumn' data-colno='${rcol.colno}' data-corder='${rcol.corder}'>`;
            divs += this.rcolumnShape(rcol);
            divs += '</div>';
        });
        divs += `<div class='add_rcolumn'>
                    <button type='button' id='btn_addColumn'>+ 칼럼 추가</button>
                </div>`;
        divs += '</div>';
        return divs;
    }

    rcolumnShape(rcol) {
        let divs = '';
        divs += `<div class='rcolumn_title' data-colno='${rcol.colno}' data-corder='${rcol.corder}'>`;
        divs += `<span class='rcolumn_cnt'>${rcol.cards.length}</span>`;
        divs += `<h2 class='rcolumn_cname'>${rcol.cname}</h2>`;
        divs += `<button type='button' class='btn_deleteColumn btn_naive'>x</button><button type='button' class='btn_showCardInput btn_naive'>+</button>`;
        divs += this.createCardForm();
        divs += `</div>`;
        divs += `<div class='rcolumn_cards'>`;
        rcol.cards.forEach((card) => {
            divs += cardObj.render(card);
        });
        divs += `</div>`;
        return divs;
    }

    createCardForm() {
        let divs = '';
        divs += `<div class='createCardForm hidden'>`;
        divs += `<textarea class='createCardText' placeholder='메모 입력'></textarea>`;
        divs += `<div>`;
        divs += `<button type='button' class='btn_cardCreate btn_cardDisabled'>입력</button>`;
        divs += `<button type='button' class='btn_cardCancel'>취소</button>`;
        divs += `</div>`;
        divs += `</div>`;

        return divs;
    }

    addEvent() {
        $All('.rcolumn_title').forEach((e) => {
            e.addEventListener('dblclick', this.showUpdateModal.bind(this));
        });

        $('#btn_addColumn').addEventListener(
            'click',
            this.addColumnHandler.bind(this)
        );

        $All('.btn_deleteColumn').forEach((e) =>
            e.addEventListener('click', this.deleteColumnHandler)
        );

        $All('.btn_showCardInput').forEach((e) =>
            e.addEventListener('click', this.showCardInput)
        );

        $All('.createCardText').forEach((e) =>
            e.addEventListener('input', this.checkTextarea)
        );

        $All('.btn_cardCreate').forEach((e) =>
            e.addEventListener('click', this.cardCreate.bind(this))
        );

        $All('.btn_cardCancel').forEach((e) =>
            e.addEventListener('click', this.cardCancel)
        );

        cardObj.addEvent();
    }

    showUpdateModal(e) {
        const modal = $('.modal');
        if (modal.classList.contains('hidden')) {
            modal.classList.toggle('hidden');

            const rcolumn_title = e.currentTarget;
            const rcolumn_cname = $('.rcolumn_cname', rcolumn_title);
            const data = {
                cname: rcolumn_cname.textContent,
                colno: rcolumn_title.dataset.colno,
            };
            this.modal.insertEditColumn(data);
        }
    }

    async addColumnHandler() {
        const data = {
            cname: '새 칼럼',
            corder: 10,
            cards: [],
        };
        const add = await fetch_post('/api/rcolumn/', data);
        console.log(add);
        this.addRcolumn(data, add);
    }

    addRcolumn(data, add) {
        const rcolumnBox = document.createElement('div');
        rcolumnBox.classList.add('rcolumn');
        rcolumnBox.dataset.colno = add.insertId;
        rcolumnBox.dataset.corder = data.corder;
        data.colno = add.insertId;
        rcolumnBox.innerHTML = this.rcolumnShape(data);
        const addBox = $('.add_rcolumn');
        $('.rcolumn_divs').insertBefore(rcolumnBox, addBox);
        $('.btn_deleteColumn', rcolumnBox).addEventListener(
            'click',
            this.deleteColumnHandler
        );
        $('.rcolumn_title', rcolumnBox).addEventListener(
            'dblclick',
            this.showUpdateModal.bind(this)
        );
        $('.btn_showCardInput', rcolumnBox).addEventListener(
            'click',
            this.showCardInput
        );
        $('.createCardText', rcolumnBox).addEventListener(
            'input',
            this.checkTextarea
        );
        $('.btn_cardCreate', rcolumnBox).addEventListener(
            'click',
            this.cardCreate.bind(this)
        );
        $('.btn_cardCancel', rcolumnBox).addEventListener(
            'click',
            this.cardCancel
        );
    }

    async deleteColumnHandler(e) {
        const sw = confirm('선택한 칼럼을 삭제하시겠습니까?');
        if (sw) {
            const rcolumn = e.currentTarget.closest('.rcolumn');
            const colno = rcolumn.dataset.colno;
            const cname = $('.rcolumn_cname', rcolumn).textContent;
            const data = { cname: cname };
            const result = await fetch_delete(`api/rcolumn/${colno}`, data);
            console.log(result);
            rcolumn.remove();
        }
    }

    showCardInput(e) {
        const currRcolTitle = e.currentTarget.closest('.rcolumn_title');
        $('.createCardForm', currRcolTitle).classList.toggle('hidden');
    }

    checkTextarea(e) {
        const currTarget = e.target;
        const cardForm = currTarget.closest('.createCardForm');
        const btn = $('.btn_cardCreate', cardForm);
        const text = currTarget.value;
        if (text) {
            if (btn.classList.contains('btn_cardDisabled')) {
                btn.classList.toggle('btn_cardDisabled');
            }
        } else {
            if (!btn.classList.contains('btn_cardDisabled')) {
                btn.classList.toggle('btn_cardDisabled');
            }
        }
    }

    async cardCreate(e) {
        const currRcolTitle = e.currentTarget.closest('.rcolumn_title');
        const cname = $('.rcolumn_cname', currRcolTitle).textContent;
        const text = $('.createCardText', currRcolTitle).value;
        const currRcolumn = currRcolTitle.closest('.rcolumn');
        const colno = currRcolumn.dataset.colno;
        const data = {
            memno: this.isLogin.memno,
            cname: cname,
            colno: colno,
            ccontent: text,
            corder: 0,
        };
        const result = await fetch_post('/api/card/', data);
        console.log(result);

        // 입력 창 닫기
        const createCardForm = $('.createCardForm', currRcolTitle);
        if (!createCardForm.classList.contains('hidden')) {
            createCardForm.classList.toggle('hidden');
            $('.createCardText', createCardForm).value = '';
        }

        // 숫자 업데이트
        const span = $('.rcolumn_cnt', currRcolTitle);
        span.innerHTML = parseInt(span.textContent) + 1;

        // 카드 추가
        const new_cardno = result.insertId;
        const html = cardObj.render({
            cardno: new_cardno,
            ccontent: text,
            id: this.isLogin.id,
        });
        const currRcolumnCards = $('.rcolumn_cards', currRcolumn);
        currRcolumnCards.insertAdjacentHTML('afterbegin', html);

        // 이벤트 추가 -> 이벤트 위임을 사용하면 추가할 일이 없어진다.. 컬럼 별로 이벤트 관리 등
        const new_card = $('.memo_card', currRcolumnCards);
        new_card.addEventListener('dragstart', cardObj.dragStart);
        new_card.addEventListener('dragend', cardObj.dragEnd);
        new_card.addEventListener(
            'dblclick',
            cardObj.showUpdateModal.bind(cardObj)
        );
        $('.card_delete', new_card).addEventListener(
            'click',
            cardObj.cardDelete
        );
    }

    cardCancel(e) {
        const currRcolTitle = e.currentTarget.closest('.rcolumn_title');
        const createCardForm = $('.createCardForm', currRcolTitle);
        if (!createCardForm.classList.contains('hidden')) {
            createCardForm.classList.toggle('hidden');
            $('.createCardText', createCardForm).value = '';
        }
    }
}
