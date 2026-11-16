import express from "express";
import path from "node:path";

const app = express();
const PORT = 3000;

const __dirname = import.meta.dirname;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "about.html"));
});

app.get("/contact-me", (req, res) => {
  res.sendFile(path.join(__dirname, "contact-me.html"));
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "404.html"));
});

app.listen(PORT, () => {
  console.log(`Express server running at http://localhosts:${PORT}`);
});

// const http = require("node:http");
// const fs = require("node:fs");
// const path = require("node:path");

// const server = http.createServer((req, res) => {
//   let filePath = "";
//   let statusCode = 200;

//   switch (req.url) {
//     case "/":
//       filePath = path.join(__dirname, "index.html");
//       break;
//     case "/about":
//       filePath = path.join(__dirname, "about.html");
//       break;
//     case "/contact-me":
//       filePath = path.join(__dirname, "contact-me.html");
//       break;
//     default:
//       filePath = path.join(__dirname, "404.html");
//       statusCode = 404;
//       break;
//   }

//   fs.readFile(filePath, (err, content) => {
//     if (err) {
//       res.writeHead(500, { "Content-Type": "text/plain" });
//       res.end("500 Internal Server Error");
//     } else {
//       res.writeHead(statusCode, { "Content-Type": "text/html" });
//       res.end(content, "utf8");
//     }
//   });
// });

// server.listen(8080, () => {
//   console.log("Server is running at http://localhost:8080");
// });
