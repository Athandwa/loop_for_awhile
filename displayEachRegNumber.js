function displayEachRegNumber(regNumbers) {
  var regList = regNumbers.split(',');
  for (var i=0;i<regList.length;i++) {
    console.log(regList[i].trim());
  }
  //return regList[i];

}
displayEachRegNumber('CJ 10111, CY 11551,   CA 554455');
