function countAllPaarl(paarlRegNumbers) {
  var regFromPaarl = paarlRegNumbers.split(', ');
  var regTotal = [];
for(var i=0; i<regFromPaarl.length; i++){
    if(regFromPaarl[i].startsWith('CJ')){

        regTotal.push(regFromPaarl[i]);
    }
  }
    return regTotal.length;
}
//console.log(countAllPaarl('CY 115544, CJ 225555, CA 115547, ND 448852, CJ 5588225'));

const assert = require('assert')

assert.equal(countAllPaarl('CY 115544, CJ 225555, CA 115547, ND 448852, CJ 5588225'), '2');
