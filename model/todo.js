const MySQL = require('./mysql');

class ToDo extends MySQL{
    constructor(){
        super();
    }

    create(todoVO){
        this.pool.execute("INSERT INTO todo(title, content, author) VALUES(?, ?, ?)", [todoVO.title, todoVO.content, todoVO.author], function(err, result) {
            console.log(result.affectedRows);
        });
    }

    read(tono){
        return new Promise((resolve, reject) =>{
            this.pool.query("SELECT * FROM todo WHERE tono = ?", [tono],function(err, rows, fields) {
                resolve(rows)
            });
        })
    }

    list(){
        return new Promise((resolve, reject) =>{
            this.pool.query("SELECT * FROM todo", function(err, rows, fields) {
                // Connection is automatically released when query resolves
                resolve(rows)
            });
        })
    }

    update(todoVO, tono){
        this.pool.execute("UPDATE todo SET title = ?, content = ?, author = ? WHERE tono = ?", [todoVO.title, todoVO.content, todoVO.author, tono], function(err, result) {
            console.log(result.affectedRows);
        });
    }

    delete(tono){
        this.pool.execute("DELETE FROM todo WHERE tono = ?", [tono], function(err, result) {
            console.log(result.affectedRows);
        });
    }
}

module.exports = ToDo;