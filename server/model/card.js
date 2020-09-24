const MySQL = require("./mysql");

class Card extends MySQL {
  constructor() {
    super();
  }
  getNewCorder(colno, memno) {
    return new Promise((resolve, reject) => {
      const query = `SELECT IFNULL(MAX(corder), 0) + 1 AS new_corder FROM card WHERE colno = ? AND memno = ?`;
      const params = [colno, memno];
      this.pool.query(query, params, function (err, rows, fields) {
        resolve(rows[0].new_corder);
      });
    });
  }
  create(memno, colno, ccontent, corder) {
    return new Promise((resolve, reject) => {
      const query = `
      INSERT INTO card(memno, colno, ccontent, corder)
      VALUES(?, ?, ?, ?)
      `;
      const params = [memno, colno, ccontent, corder];
      this.pool.execute(query, params, function (err, result) {
        resolve(result.insertId);
      });
    });
  }

  readByCardno(cardno) {
    return new Promise((resolve, reject) => {
      this.pool.query(
        "SELECT cardno, memno, colno, ccontent, corder FROM card WHERE cardno = ?",
        [cardno],
        function (err, rows, fields) {
          resolve(rows);
        }
      );
    });
  }

  getCorderMid(toPrevCardno, toNextCardno) {
    return new Promise((resolve, reject) => {
      let query, params;
      if (!(toPrevCardno || toNextCardno)) {
        resolve(1);
        return;
      } else if (!toPrevCardno) {
        query = `SELECT corder+1 AS corder_mid FROM card WHERE cardno = ?`;
        params = [toNextCardno];
      } else if (!toNextCardno) {
        query = `SELECT corder/2 AS corder_mid FROM card WHERE cardno = ?`;
        params = [toPrevCardno];
      } else {
        query = `SELECT avg(corder) AS corder_mid FROM card WHERE cardno = ? OR cardno = ?`;
        params = [toPrevCardno, toNextCardno];
      }
      this.pool.query(query, params, function (err, rows, fields) {
        resolve(rows[0].corder_mid);
      });
    });
  }

  listByColno(colno) {
    return new Promise((resolve, reject) => {
      this.pool.query(
        "SELECT cardno, memno, colno, ccontent, corder FROM card WHERE colno = ?",
        [colno],
        function (err, rows, fields) {
          resolve(rows);
        }
      );
    });
  }

  updateCcontent(cardno, ccontent) {
    return new Promise((resolve, reject) => {
      const query = "UPDATE card SET ccontent = ? WHERE cardno = ?";
      const params = [ccontent, cardno];
      this.pool.execute(query, params, function (err, result) {
        resolve(result.affectedRows);
      });
    });
  }

  updateOrder(cardno, corder, colno) {
    const query = "UPDATE card SET colno = ?, corder = ? WHERE cardno = ?";
    const params = [colno, corder, cardno];
    return new Promise((resolve, reject) => {
      this.pool.execute(query, params, function (err, result) {
        resolve(result.affectedRows);
      });
    });
  }

  delete(cardno) {
    return new Promise((resolve, reject) => {
      const query = `DELETE FROM card WHERE cardno = ?`;
      const params = [cardno];
      this.pool.execute(query, params, function (err, result) {
        resolve(result.affectedRows);
      });
    });
  }
}

module.exports = Card;
