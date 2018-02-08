var http=require('http');
var fs=require('fs');

var myServer=http.createServer(function(req, res){
  console.log('Hosting server url is :'+req.url);
    res.writeHead(200, {'Content-Type':'application/json'});
    var people = [
       { name: 'Dave', location: 'Atlanta' },
       { name: 'Santa Claus', location: 'North Pole' },
       { name: 'Man in the Moon', location: 'The Moon' }
     ];
    res.end( JSON.stringify(people));
}).listen(8020);
