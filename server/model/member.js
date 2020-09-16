const MySQL = require('./mysql');

class Member extends MySQL{
    constructor(){
        super();
    }

    create(id, pw, mname){
        return new Promise((resolve, reject) =>{
            this.pool.execute("INSERT INTO member(id, pw, mname) VALUES(?, ?, ?)", [id, pw, mname], function(err, result) {
                resolve(result.affectedRows);
            });
        });
    }

    readByMemno(memno){
        return new Promise((resolve, reject) =>{
            this.pool.query("SELECT memno, id, mname FROM member WHERE memno = ?", [memno],function(err, rows, fields) {
                resolve(rows)
            });
        });
    }

    readById(id){
        return new Promise((resolve, reject) =>{
            this.pool.query("SELECT memno, id, mname FROM member WHERE id = ?", [id],function(err, rows, fields) {
                resolve(rows)
            });
        })
    }

    getPwById(id){
        return new Promise((resolve, reject) =>{
            this.pool.query("SELECT pw FROM member WHERE id = ?", [id],function(err, rows, fields) {
                resolve(rows)
            });
        })
    }

    list(){
        return new Promise((resolve, reject) =>{
            this.pool.query("SELECT memno, id, mname FROM member", function(err, rows, fields) {
                // Connection is automatically released when query resolves
                resolve(rows)
            });
        })
    }

    update(memberDTO){
        this.pool.execute("UPDATE member SET pw = ?, mname = ? WHERE id = ?", [memberDTO.pw, memberDTO.mname, memberDTO.id], function(err, result) {
            console.log(result.affectedRows);
        });
    }

    updatePw(memberDTO){
        this.pool.execute("UPDATE member SET pw = ? WHERE id = ?", [memberDTO.pw, memberDTO.id], function(err, result) {
            console.log(result.affectedRows);
        });
    }

    updateMname(memberDTO){
        this.pool.execute("UPDATE member SET mname = ? WHERE id = ?", [memberDTO.mname, memberDTO.id], function(err, result) {
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

// const memberDTO = {id:"user1", pw:"1234", mname:"사용자1"};
// const mem = new Member();
// mem.create(memberDTO);