var events=require('events');
var util=require('util');

var Person=function(name){
  this.name=name;
};
//with help of util module we are inherting events to Person Object.
util.inherits(Person,events.EventEmitter);

var baki=new Person('baki');
var issa=new Person('issa');
var srinu =new Person('srinu');

var people=[baki,issa,srinu];

people.forEach(function(person){
person.on('speak', function(msg){
  console.log(person.name+" said:"+ msg);
});
});

srinu.emit('speak',"Wass up guys!!!!!");
