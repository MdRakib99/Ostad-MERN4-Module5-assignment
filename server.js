const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("This is Home Page");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("This is About Page");
  } else if (req.url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("This is Contact Page");
  } else if (req.url === "/file-write") {
    fs.writeFile("demo.txt", "hello world", function (error) {
      if (error) {
        res.writeHead(500, { "Content-Type": "text/html" });
        res.end("file write Failed");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("File write Success");
      }
    });
  }
});

server.listen(3000, () => {
  console.log("Server run successfull");
});
