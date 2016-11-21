function firstPaarl(str) {
  var regList = str.split(',');
  for(var i=0;i<regList.length;i++){
if (regList[i].startsWith('CJ'));{
      return regList[i];
    }
  }
}
console.log(firstPaarl('CY 10111, CJ 10299, CA 100010'));
 // const assert = require('assert')
 //
 // assert.equal(firstPaarl('CY 10111, CA 10299, CJ 100010'), 'CA 10111');
