const assert = require('assert')
function countAllFromTown(regNo,location) {
  var onlyStellies = regNo.split(',');
  var regTotal = [];
    for(var i=0; i<onlyStellies.length; i++){
      if(onlyStellies[i].startsWith(location)){
            //console.log(onlyStellies[i]);
            regTotal.push(onlyStellies[i]);
      }
    }
            return regTotal.length;
}

var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
console.log(fromStellies);
//fromStellies should contains
assert.deepEqual(fromStellies, 3);
