var time=0;

var timer=setInterval(function(){
  time+=2;

  console.log(time+" seconds passed:");

  if(time>8)
  {
    clearInterval(timer);
    console.log(__dirname);
  }
})
