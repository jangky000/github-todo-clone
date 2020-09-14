const MySQL = require('./mysql');

class Done extends MySQL{
    constructor(){
        super();
    }

    create(doneVO){
        this.pool.execute("INSERT INTO done(title, content, author) VALUES(?, ?, ?)", [doneVO.title, doneVO.content, doneVO.author], function(err, result) {
            console.log(result.affectedRows);
        });
    }

    read(dono){
        return new Promise((resolve, reject) =>{
            this.pool.query("SELECT * FROM done WHERE dono = ?", [dono],function(err, rows, fields) {
                resolve(rows)
            });
        })
    }

    list(){
        return new Promise((resolve, reject) =>{
            this.pool.query("SELECT * FROM done", function(err, rows, fields) {
                // Connection is automatically released when query resolves
                resolve(rows)
            });
        })
    }

    update(doneVO, dono){
        this.pool.execute("UPDATE done SET title = ?, content = ?, author = ? WHERE dono = ?", [doneVO.title, doneVO.content, doneVO.author, dono], function(err, result) {
            console.log(result.affectedRows);
        });
    }

    delete(dono){
        this.pool.execute("DELETE FROM done WHERE dono = ?", [dono], function(err, result) {
            console.log(result.affectedRows);
        });
    }
}

module.exports = Done;