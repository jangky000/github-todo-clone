const MySQL = require("./mysql");

class Rcolumn extends MySQL {
  constructor() {
    super();
  }

  create(cname, corder) {
    return new Promise((resolve, reject) => {
      this.pool.execute(
        "INSERT INTO rcolumn(cname, corder) VALUES(?, ?)",
        [cname, corder],
        function (err, result) {
          //   console.log(result);
          resolve(result.insertId);
        }
      );
    });
  }

  read(colno) {
    return new Promise((resolve, reject) => {
      this.pool.query(
        "SELECT * FROM rcolumn WHERE colno = ?",
        [colno],
        function (err, rows, fields) {
          resolve(rows);
        }
      );
    });
  }

  list() {
    return new Promise((resolve, reject) => {
      this.pool.query("SELECT * FROM rcolumn", function (err, rows, fields) {
        // Connection is automatically released when query resolves
        resolve(rows);
      });
    });
  }

  listJoinCardMem(memno) {
    return new Promise((resolve, reject) => {
      const query = `
      SELECT r.colno, r.cname, c.cardno, c.id, c.ccontent
      FROM rcolumn r 
      LEFT JOIN 
        (
          SELECT cardno, card.memno, colno, member.id, ccontent, corder
          FROM card 
          JOIN member 
          ON card.memno = member.memno
          WHERE member.memno = ?
        ) c 
      ON r.colno = c.colno
      ORDER BY r.corder, c.corder DESC
      `;
      this.pool.query(query, [memno], function (err, rows, fields) {
        resolve(rows);
      });
    });
  }

  updateCname(colno, newCname) {
    return new Promise((resolve, reject) => {
      const query = "UPDATE rcolumn SET cname = ? WHERE colno = ?";
      const params = [newCname, colno];
      this.pool.execute(query, params, function (err, result) {
        resolve(result.affectedRows);
      });
    });
  }

  delete(colno) {
    return new Promise((resolve, reject) => {
      this.pool.execute(
        "DELETE FROM rcolumn WHERE colno = ?",
        [colno],
        function (err, result) {
          resolve(result.affectedRows);
        }
      );
    });
  }
}

module.exports = Rcolumn;
