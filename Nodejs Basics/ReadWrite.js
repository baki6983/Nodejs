//fs module for file read and write
var fs=require('fs');

fs.readFile('readme.txt','utf8',function(err, data){
fs.writeFile('writeMe1.txt',data);
});
console.log("Hello i am first before aysnc method:");
