var fs=require('fs');

//to delete file from current directory.
// fs.unlink('writeMe1.txt');

//To create a directory
// fs.mkdirSync("fakeDirectory");

//To remove a directory
// fs.rmdirSync("fakeDirectory");

//To creat a directory and write a file

fs.mkdir('stuff',function(){
  fs.readFile('readme.txt','utf8', function(err,data){
    fs.writeFile('writeMe.txt',data);
  });
})
