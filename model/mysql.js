const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();

class MySQL{
    constructor(){
        this.pool;
        this.init();
    }
    init(){
        this.pool = mysql.createPool({
            host: process.env.HOST,
            user: process.env.USER,
            password: process.env.PASSWORD,
            database: process.env.DATABASE,
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

    update(){
        //
    }

    delete(){
        //
    }

}

module.exports = MySQL;

// const ms = new MySQL();
// ms.list().then(el => console.log(el));