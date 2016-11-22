function firstPaarl(str) {
  var regList = str.split(', ');
    for(var i=0; i<regList.length; i++){
      if(regList[i].startsWith('CJ')){
        return regList[i];
      }
    }
}
console.log(firstPaarl('DRT 4008 L, CJ 0438, CA 05408, CY 9808, ND 2347, CJ 8447'));
 // const assert = require('assert')
 //
 // assert.equal(firstPaarl('CY 10111, CA 10299, CJ 100010'), 'CA 10111');
