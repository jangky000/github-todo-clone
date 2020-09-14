const MySQL = require('./mysql');

class InProgress extends MySQL{
    constructor(){
        super();
    }

    create(inprogressVO){
        this.pool.execute("INSERT INTO inprogress(title, content, author) VALUES(?, ?, ?)", [inprogressVO.title, inprogressVO.content, inprogressVO.author], function(err, result) {
            console.log(result.affectedRows);
        });
    }

    read(inpno){
        return new Promise((resolve, reject) =>{
            this.pool.query("SELECT * FROM inprogress WHERE inpno = ?", [inpno],function(err, rows, fields) {
                resolve(rows)
            });
        })
    }

    list(){
        return new Promise((resolve, reject) =>{
            this.pool.query("SELECT * FROM inprogress", function(err, rows, fields) {
                // Connection is automatically released when query resolves
                resolve(rows)
            });
        })
    }

    update(inprogressVO, inpno){
        this.pool.execute("UPDATE inprogress SET title = ?, content = ?, author = ? WHERE inpno = ?", [inprogressVO.title, inprogressVO.content, inprogressVO.author, inpno], function(err, result) {
            console.log(result.affectedRows);
        });
    }

    delete(inpno){
        this.pool.execute("DELETE FROM inprogress WHERE inpno = ?", [inpno], function(err, result) {
            console.log(result.affectedRows);
        });
    }
}


module.exports = InProgress;