module.exports ={
  parseJoinResult: function (result){
    // {colno: , cname:, cards:[ {cardno: , id: , ccontent: } ]}
    const mapColno = {};
    result.forEach(e => {
      if(Object.keys(mapColno).includes(e.colno.toString())){
        mapColno[e.colno].cards.push({cardno: e.cardno, id: e.id, ccontent: e.ccontent});
      } else{
        console.log('check2');
        const cards = !!e.cardno ? [{cardno: e.cardno, id: e.id, ccontent: e.ccontent}] : [];
        mapColno[e.colno] = {colno:e.colno, cname:e.cname, cards:cards};
      }
    });
    return Object.values(mapColno);
  }
}

