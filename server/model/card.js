const MySQL = require("./mysql");

class Card extends MySQL {
  constructor() {
    super();
  }

  create(memno, colno, ccontent, corder) {
    return new Promise((resolve, reject) => {
      this.pool.execute(
        "INSERT INTO card(memno, colno, ccontent, corder) VALUES(?, ?, ?, ?)",
        [memno, colno, ccontent, corder],
        function (err, result) {
          resolve(result.affectedRows);
        }
      );
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

  // list(){
  //     return new Promise((resolve, reject) =>{
  //         this.pool.query("SELECT cardno, memno, colno, ccontent, corder FROM card", function(err, rows, fields) {
  //             // Connection is automatically released when query resolves
  //             resolve(rows)
  //         });
  //     })
  // }

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

  update(CardVO) {
    this.pool.execute(
      "UPDATE card SET ccontent = ? WHERE cardno = ?",
      [CardVO.ccontent, CardVO.cardno],
      function (err, result) {
        console.log(result.affectedRows);
      }
    );
  }

  updateOrder(cardno, corder, colno) {
    const query = "UPDATE card SET corder = ?, colno = ? WHERE cardno = ?";
    const params = [corder, colno, cardno];
    return new Promise((resolve, reject) => {
      this.pool.execute(query, params, function (err, result) {
        resolve(result.affectedRows);
      });
    });
  }

  delete(cardno) {
    this.pool.execute("DELETE FROM card WHERE cardno = ?", [cardno], function (
      err,
      result
    ) {
      console.log(result.affectedRows);
    });
  }
}

module.exports = Card;
