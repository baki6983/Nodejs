var AddingModule=function (arr){
  return  "there are "+arr.length+" Elements in the array";
}
var mulitiModule=function(a,b){
  return `the multiplication of 2 numbers is ${a*b}`;
}
var pi=3.142;
module.exports={
  AddingModule:AddingModule,
  mulitiModule:mulitiModule,
  pi:pi
}
