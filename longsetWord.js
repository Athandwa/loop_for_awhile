function findlonglen(str) {
  var strSplit = str.split(' ');
  var longLen = 0;
  var longAd = '';
  for(var i = 0; i < strSplit.length; i++){
      var longWord = strSplit[i];
    if(strSplit[i].length > longLen){
	    longLen = strSplit.length;
      longAd = longWord;

     }
  }
          return longAd ;
}
console.log(findlonglen('The soccer player is playing alone'));
