const MySQL = require('./mysql');

class Member extends MySQL{
    constructor(){
        super();
    }

    create(memberVO){
        this.pool.execute("INSERT INTO member(id, pw, mname) VALUES(?, ?, ?)", [memberVO.id, memberVO.pw, memberVO.mname], function(err, result) {
            console.log(result.affectedRows);
        });
    }

    read(memno){
        return new Promise((resolve, reject) =>{
            this.pool.query("SELECT * FROM member WHERE memno = ?", [memno],function(err, rows, fields) {
                resolve(rows)
            });
        })
    }

    list(){
        return new Promise((resolve, reject) =>{
            this.pool.query("SELECT * FROM member", function(err, rows, fields) {
                // Connection is automatically released when query resolves
                resolve(rows)
            });
        })
    }

    update(memberVO){
        this.pool.execute("UPDATE member SET id = ?, pw = ?, mname = ? WHERE memno = ?", [memberVO.id, memberVO.pw, memberVO.mname, memberVO.memno], function(err, result) {
            console.log(result.affectedRows);
        });
    }

    delete(memno){
        this.pool.execute("DELETE FROM member WHERE memno = ?", [memno], function(err, result) {
            console.log(result.affectedRows);
        });
    }
}

module.exports = Member;

// const memberVO = {id:"user1", pw:"1234", mname:"사용자1"};
// const mem = new Member();
// mem.create(memberVO);