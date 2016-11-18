function shoppingList(str) {
  var foodList = str.split(',');
  for (var i=0;i<foodList.length;i++) {
    console.log(foodList[i].trim());
  }
  //return foodList[i];

}
shoppingList('1x bread,    6x hotdog rolls,   2x tubs of margarine');
