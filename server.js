const fs = require("fs");
const http = require("http");
const port = 3000;

const server = http.createServer(function (req, res) {
  if (req.url == "/") {
    res.write("This is Home Page");
    res.end();
  } else if (req.url == "/about") {
    res.write("This is About Page");
    res.end();
  } else if (req.url == "/contact") {
    res.write("This is Contact Page");
    res.end();
  } else if (req.url == "/file-write") {
    fs.writeFile("demo.txt", "hello world", function (error) {
      if (error) {
        res.write("file write Failed");
        res.end();
      } else {
        res.write("File write Success");
        res.end();
      }
    });
  }
});

server.listen(port, function () {
  console.log("successfully run the server");
});
