var http=require('http');
var fs=require('fs');

var myServer=http.createServer(function(req,res){
  console.log('url is :' +req.url);
    res.writeHead(200, {'Content-Type': 'text/html'});
    var myReadStream=fs.createReadStream(__dirname+'/index.html','utf8');
    myReadStream.pipe(res);
}).listen(8010);
