var app   = require('express')();
var fs    = require('fs');
var http  = require('http').Server(app);
var data  = '';

// create read stream
var readStream  = fs.createReadStream('stream.txt');

// set the encoding to be utf8
readStream.setEncoding('UTF8');

// data event is fired when data is avialable to read
readStream.on('data',function(chunk){
  data  +=chunk;
});

// end event is fired when is no more data is to read
readStream.on('end',function(){
  console.log(data);
})

http.listen(3000, function () {
    console.log('listening on *:3000');
});
