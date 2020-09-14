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

    read(toid){
        return new Promise((resolve, reject) =>{
            this.pool.query("SELECT * FROM todo WHERE toid = ?", [toid],function(err, rows, fields) {
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

    update(todoVO, toid){
        this.pool.execute("UPDATE todo SET title = ?, content = ?, author = ? WHERE toid = ?", [todoVO.title, todoVO.content, todoVO.author, toid], function(err, result) {
            console.log(result.affectedRows);
        });
    }

    delete(toid){
        this.pool.execute("DELETE FROM todo WHERE toid = ?", [toid], function(err, result) {
            console.log(result.affectedRows);
        });
    }
}

const toDo = new ToDo();
// toDo.read().then(e => console.log(e));

todoVO = {
    title: "테스트입니다.", 
    content: "테스트입니다.", 
    author: "테스트입니다."
};

todoVO2 = {
    title: "테스트2입니다.", 
    content: "테스트2입니다.", 
    author: "테스트2입니다."
};

module.exports = ToDo;