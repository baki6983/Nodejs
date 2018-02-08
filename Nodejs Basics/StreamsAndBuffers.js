//Streams and buffers

var http=require('http');
var fs=require('fs');

var myServer=http.createServer(function(req,res){

  console.log('request was made'+req.url);
  var myReadStream=fs.createReadStream(__dirname+'/readme.txt','utf8');
  var myWriteStream=fs.createWriteStream(__dirname+'/StreamWrite1.txt');
  myReadStream.pipe(res);

}).listen(8080);
