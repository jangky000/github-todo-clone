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
}

module.exports = Logger;
