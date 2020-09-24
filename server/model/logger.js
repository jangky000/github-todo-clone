const MySQL = require("./mysql");

class Logger extends MySQL {
  constructor() {
    super();
  }

  create(lgmode, cardno, ccontent, mvfrom, mvto, memno) {
    return new Promise((resolve, reject) => {
      const query = `
        INSERT INTO logger(lgmode, cardno, ccontent, mvfrom, mvto, rdate, memno) 
        VALUES (?, ?, ?, ?, ?, NOW(), ?)
        `;
      const params = [lgmode, cardno, ccontent, mvfrom, mvto, memno];
      this.pool.execute(query, params, function (err, result) {
        resolve(result.insertId);
      });
    });
  }

  readByMemno(memno) {
    return new Promise((resolve, reject) => {
      const query = `
      SELECT logno, lgmode, cardno, ccontent, mvfrom, mvto, rdate 
      FROM logger 
      WHERE memno = ? 
      ORDER BY logno DESC`;
      const params = [memno];
      this.pool.query(query, params, function (err, rows, fields) {
        resolve(rows);
      });
    });
  }
}

module.exports = Logger;
