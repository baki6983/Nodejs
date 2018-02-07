var eventsMod=require('events');

var eventEmitor=new eventsMod.EventEmitter();

eventEmitor.on('someEvent', function(msg){
  console.log(msg);
});

eventEmitor.emit('someEvent',"Event is emitted!!!");
