var fs = require('fs');

fs.readFile("hello.txt", function(error, data) {
  if (error) {
    return console.error(error);
  }
  console.log("111");
  console.log(data.toString());
});

console.log("End!");