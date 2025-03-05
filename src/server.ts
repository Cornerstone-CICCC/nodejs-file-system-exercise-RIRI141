// Check the README.md file for instructions to the exercise
import http from "http";
import fs from "fs";
import path from "path";
import url from "url";
import dotenv from "dotenv";
dotenv.config();

const directory = "images";
const filePath = path.join(__dirname, directory);

const server = http.createServer((req, res) => {
  const { method } = req;
  const parsedUrl = url.parse(req.url || "", true);
  const { pathname } = parsedUrl;
  let fileName = "veryhappydog.jpg";

  if (pathname === "/view-image" && method === "GET") {
    fs.readFile(`${filePath}/${fileName}`, (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-type": "text/plain" });
        res.end("Eror reading file!");
        return;
      }

      res.writeHead(200, { "content-type": "image/jpeg" });
      res.end(data);
    });
    return;
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}}`);
});
