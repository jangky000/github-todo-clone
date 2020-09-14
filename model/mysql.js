const mysql = require('mysql2');
// 비밀번호는 별도의 파일로 분리해서 버전관리에 포함시키지 않아야 합니다. 

class MySQL{
    constructor(){
        this.pool;
        this.init();
    }
    init(){
        this.pool = mysql.createPool({
            host: '101.101.210.76',
            user: 'j174',
            password: '12345678',
            database: 'w2todo',
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
        });
    }

    create(){
        //
    }

    read(){
        return new Promise((resolve, reject) =>{
            this.pool.query("SELECT * FROM todo WHERE toid = ?", [1],function(err, rows, fields) {
                // Connection is automatically released when query resolves
                // console.log(rows);
                resolve(rows)
            });
        })
    }

    list(){
        return new Promise((resolve, reject) =>{
            this.pool.query("SELECT * FROM todo", function(err, rows, fields) {
                // Connection is automatically released when query resolves
                // console.log(rows);
                resolve(rows)
            });
        })
    }

    update(){
        //
    }

    delete(){
        //
    }

    closeConnection(){
        //
        this.pool.closeConnection();
    }
}

// module.exports = MySQL;

const mysql2 = new MySQL();

mysql2.list();
mysql2.read().then(el => {
    console.log(el);
    mysql2.closeConnection();
});