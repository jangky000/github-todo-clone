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
      ORDER BY r.corder DESC, c.corder DESC
      `;
      this.pool.query(query, [memno], function (err, rows, fields) {
        resolve(rows);
      });
    });
  }

  update(rcolumnVO) {
    return new Promise((resolve, reject) => {
      this.pool.execute(
        "UPDATE rcolumn SET cname = ?, corder = ? WHERE colno = ?",
        [columnVO.cname, columnVO.corder, columnVO.colno],
        function (err, result) {
          resolve(result.affectedRows);
        }
      );
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
