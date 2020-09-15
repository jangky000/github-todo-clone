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



    closeConnection(){
        this.pool.end();
    }
}

module.exports = MySQL;

// const ms = new MySQL();
// ms.list().then(el => console.log(el));