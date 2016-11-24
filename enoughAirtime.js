const assert = require('assert');
function enoughAirtime(airtimeAmount) {
  var usageAirtime = airtimeAmount.split(',');
  var total = 0;
  var airtime = 50;
    for(var i=0; i<usageAirtime.length; i++){
      if(usageAirtime[i] === 'call'){
          total = total + 1.88;
      }
      else if(usageAirtime[i] === 'sms'){
          total = total + 0.75;
      }
      else if(usageAirtime[i] === 'data'){
          total = total + 12;
      }
      else{
          total = total + 0
      }
    }
      var results = airtime - total;
          return results.toFixed(2);
}
//console.log(enoughAirtime('call,call,call,data,sms,sms,call,data'));
var totalBalance = enoughAirtime('call,call,call,data,sms,sms,call,data');
console.log(totalBalance);
assert.deepEqual(totalBalance, 16.98);
