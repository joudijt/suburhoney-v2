const http = require("http");
const fs = require("fs");
const path = require("path");

const MIME = {
  ".html": "text/html; charset=UTF-8",
  ".js": "application/javascript; charset=UTF-8",
  ".css": "text/css; charset=UTF-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".webp": "image/webp",
  ".woff2": "font/woff2",
};

const root = __dirname;
const port = process.env.PORT || 5176;

http
  .createServer((req, res) => {
    let filePath = path.join(root, decodeURIComponent(req.url.split("?")[0]));
    if (filePath.endsWith(path.sep)) filePath = path.join(filePath, "index.html");
    fs.readFile(filePath, (err, data) => {
      if (err) {
        fs.readFile(path.join(root, "index.html"), (e2, idx) => {
          if (e2) return res.writeHead(404).end("Not found");
          res.writeHead(200, { "Content-Type": MIME[".html"] });
          res.end(idx);
        });
        return;
      }
      const ext = path.extname(filePath);
      res.writeHead(200, { "Content-Type": MIME[ext] || "application/octet-stream" });
      res.end(data);
    });
  })
  .listen(port, () => console.log(`suburhoney clone running at http://localhost:${port}`));
