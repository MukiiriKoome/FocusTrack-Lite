const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;
const SESSIONS_FILE = path.join(__dirname, "sessions.json");

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/sessions") {
    // Serve session data
    fs.readFile(SESSIONS_FILE, "utf8", (err, data) => {
      if (err) {
        res.writeHead(500);
        return res.end("Error reading sessions");
      }
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(data);
    });

  } else if (req.method === "POST" && req.url === "/sessions") {
    // Receive new session
    let body = "";
    req.on("data", chunk => (body += chunk));
    req.on("end", () => {
      try {
        const newSession = JSON.parse(body);
        fs.readFile(SESSIONS_FILE, "utf8", (err, data) => {
          let sessions = [];
          if (!err) sessions = JSON.parse(data || "[]");

          sessions.push(newSession);
          fs.writeFile(SESSIONS_FILE, JSON.stringify(sessions, null, 2), () => {
            res.writeHead(201, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: "Session saved" }));
          });
        });
      } catch (e) {
        res.writeHead(400);
        res.end("Invalid JSON");
      }
    });

  } else if (req.url === "/" || req.url.startsWith("/public")) {
    // Serve static files (HTML/CSS/JS)
    const filePath = path.join(__dirname, "public", req.url === "/" ? "index.html" : req.url.replace("/public/", ""));
    const ext = path.extname(filePath);
    const contentType = {
      ".html": "text/html",
      ".css": "text/css",
      ".js": "application/javascript"
    }[ext] || "text/plain";

    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.writeHead(404);
        res.end("Not found");
      } else {
        res.writeHead(200, { "Content-Type": contentType });
        res.end(content);
      }
    });

  } else {
    res.writeHead(404);
    res.end("Not found");
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
