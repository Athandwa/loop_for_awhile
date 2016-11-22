function allPaarl(registrations) {
    var regList = registrations.split(', ');
    var paarlReg = [];
  for(var i=0; i<regList.length; i++){
      if(regList[i].startsWith('CJ')){
          console.log(regList[i]);
          paarlReg.push(regList[i]);
      }
    }
      return paarlReg;
}
allPaarl('CY 55125, CA 1101157, CJ 225001, CY 1158225, CJ 1158878');
