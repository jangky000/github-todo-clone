const MySQL = require('./mysql');

class Column extends MySQL{
    constructor(){
        super();
    }

    create(columnVO){
        this.pool.execute("INSERT INTO column(cname, corder) VALUES(?, ?, ?)", [columnVO.cname, columnVO.corder], function(err, result) {
            console.log(result.affectedRows);
        });
    }

    read(colno){
        return new Promise((resolve, reject) =>{
            this.pool.query("SELECT * FROM column WHERE colno = ?", [colno], function(err, rows, fields) {
                resolve(rows)
            });
        })
    }

    list(){
        return new Promise((resolve, reject) =>{
            this.pool.query("SELECT * FROM column", function(err, rows, fields) {
                // Connection is automatically released when query resolves
                resolve(rows)
            });
        })
    }

    update(columnVO){
        this.pool.execute("UPDATE column SET cname = ?, corder = ? WHERE colno = ?", [columnVO.cname, columnVO.corder, columnVO.colno], function(err, result) {
            console.log(result.affectedRows);
        });
    }

    delete(colno){
        this.pool.execute("DELETE FROM column WHERE colno = ?", [colno], function(err, result) {
            console.log(result.affectedRows);
        });
    }
}

// module.exports = Column;

const columnVO = {cname: '할 일', corder: 1}
