const MySQL = require('./mysql');

class Rcolumn extends MySQL{
    constructor(){
        super();
    }

    create(cname, corder){
        return new Promise((resolve, reject) =>{
            this.pool.execute("INSERT INTO rcolumn(cname, corder) VALUES(?, ?)", [cname, corder], function(err, result) {
                resolve(result.affectedRows);
            });
        });
    }

    read(colno){
        return new Promise((resolve, reject) =>{
            this.pool.query("SELECT * FROM rcolumn WHERE colno = ?", [colno], function(err, rows, fields) {
                resolve(rows)
            });
        })
    }

    list(){
        return new Promise((resolve, reject) =>{
            this.pool.query("SELECT * FROM rcolumn", function(err, rows, fields) {
                // Connection is automatically released when query resolves
                resolve(rows)
            });
        });
    }

    listJoinCardMem(){
        return new Promise((resolve, reject) =>{
            this.pool.query("SELECT r.colno, r.cname, c.cardno, c.id, c.ccontent FROM rcolumn r LEFT JOIN (SELECT cardno, id, colno, ccontent FROM card JOIN member ON card.memno = member.memno) c ON r.colno = c.colno;", function(err, rows, fields) {
                resolve(rows)
            });
        });
    }

    update(rcolumnVO){
        return new Promise((resolve, reject) =>{
            this.pool.execute("UPDATE rcolumn SET cname = ?, corder = ? WHERE colno = ?", [columnVO.cname, columnVO.corder, columnVO.colno], function(err, result) {
                resolve(result.affectedRows);
            });
        });
    }

    delete(colno){
        return new Promise((resolve, reject) =>{
            this.pool.execute("DELETE FROM rcolumn WHERE colno = ?", [colno], function(err, result) {
                resolve(result.affectedRows);
            });
        });
    }
}

module.exports = Rcolumn;

// const columnVO = {cname: '할 일', corder: 1}
