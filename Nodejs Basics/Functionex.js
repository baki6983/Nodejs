function simpleFunction(fun){
  fun();
}

var depefunction=function(){

  console.log("Byee from dependsFunction");
}

simpleFunction(depefunction);
