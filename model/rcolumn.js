const MySQL = require('./mysql');

class Rcolumn extends MySQL{
    constructor(){
        super();
    }

    create(rcolumnVO){
        this.pool.execute("INSERT INTO rcolumn(cname, corder) VALUES(?, ?, ?)", [columnVO.cname, columnVO.corder], function(err, result) {
            console.log(result.affectedRows);
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
        })
    }

    update(rcolumnVO){
        this.pool.execute("UPDATE rcolumn SET cname = ?, corder = ? WHERE colno = ?", [columnVO.cname, columnVO.corder, columnVO.colno], function(err, result) {
            console.log(result.affectedRows);
        });
    }

    delete(colno){
        this.pool.execute("DELETE FROM rcolumn WHERE colno = ?", [colno], function(err, result) {
            console.log(result.affectedRows);
        });
    }
}

module.exports = Rcolumn;

// const columnVO = {cname: '할 일', corder: 1}
