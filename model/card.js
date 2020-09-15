const MySQL = require('./mysql');

class Card extends MySQL{
    constructor(){
        super();
    }

    create(CardVO){
        this.pool.execute("INSERT INTO card(memno, colno, ccontent, corder) VALUES(?, ?, ?)", [CardVO.memno, CardVO.colno, CardVO.ccontent, CardVO.corder], function(err, result) {
            console.log(result.affectedRows);
        });
    }

    read(cardno){
        return new Promise((resolve, reject) =>{
            this.pool.query("SELECT cardno, memno, colno, ccontent, corder FROM card WHERE cardno = ?", [cardno],function(err, rows, fields) {
                resolve(rows)
            });
        })
    }

    list(){
        return new Promise((resolve, reject) =>{
            this.pool.query("SELECT cardno, memno, colno, ccontent, corder FROM card", function(err, rows, fields) {
                // Connection is automatically released when query resolves
                resolve(rows)
            });
        })
    }

    update(CardVO){
        this.pool.execute("UPDATE card SET ccontent = ? WHERE cardno = ?", [CardVO.ccontent, CardVO.cardno], function(err, result) {
            console.log(result.affectedRows);
        });
    }

    delete(cardno){
        this.pool.execute("DELETE FROM card WHERE cardno = ?", [cardno], function(err, result) {
            console.log(result.affectedRows);
        });
    }
}

module.exports = Card;