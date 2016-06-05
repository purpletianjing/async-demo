var async = require("async");

var arrays = ['test', 'dev', 'demo'];

async.each(arrays, function(array, callback) {
  console.log('the array is ' + array);
  if(array.length > 3) {
    console.log('this length is more than 3 characters');
    callback('the string is too long');
  } else {
    console.log('string processed');
    callback();
  }
}, function(err){
  if (err) {
    console.log('A string failed to process');
  } else {
    console.log('all strings are processed successfully');
  }
});

//running result: the array is test
//this length is more than 3 characters
//A string failed to process
//the array is dev
//string processed
//the array is demo
//this length is more than 3 characters

async.series([function(callback){
  console.log("2345678"+'\n');
  callback(null, 'one');
}, function(callback){

}])

