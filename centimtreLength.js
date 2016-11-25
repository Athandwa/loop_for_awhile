function lengthOfRopeSold(centimetre) {
    var metres = centimetre.split(',');
    for(var i=0; i<metres.length; i++){
      var distance = metres[i].trim();
      //console.log(distance);

      if(distance.endsWith('cm')){
        //console.log('meter');
        console.log('centimeter');
      }
      else if(distance.endsWith('mm')){
        console.log('milimetres');
      }
      else {
        console.log('metre');
      }
          //return metres.length;
      //console.log();
    }
}

//lengthOfRopeSold('1cm, 20cm');
lengthOfRopeSold('1m, 20cm,3m,75cm, 35mm, 50cm');
