function checkCashRegister(price, cash, cid) {
    let compare = cid.map(arr=> [...arr])
  
    let change = [];
    let inChange = cash - price;
  
    for(let i = 0; i < cid.length; i++){
      if(cid[i][1] > 0){
          if(cid[i][1] >= inChange){
              cid[i][1] -= inChange;
              inChange -= cid[i][1];
          }else if(inChange > cid[i][1]){
              inChange -= cid[i][1];
              cid[i][1] = 0;
          }
          change.push(cid[i][0], compare[i][1] - cid[i][1]);
      }
      if(inChange <= 0) break;
    }
  
    let status = inChange > 0 ? 'INSUFFICIENT_FUNDS': cid.every(n=> n===0) ? 'CLOSED' : 'OPEN'

    return {
      status,
      change 
    };
  }
  
  console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))