// Check the README.md file for instructions to the exercise
import http from "http";
import fs from "fs";
import path from "path";
import url from "url";
import { readFile } from "./fileFunc";
import dotenv from "dotenv";
dotenv.config();

const directory = "images"
const docsDirectory = path.join(__dirname, directory)


const server = http.createServer((req, res) => {
  const { method } = req;
  const parsedUrl = url.parse(req.url || "", true);
  const { pathname } = parsedUrl;

  if (pathname === "/" && method === "GET") {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.end("Welocome to my server");
    return;
  }

  if (pathname === "/view-image" && method === "GET") {
   readFile(path.join(docsDirectory, "veryhappydog.jpg")).then(data => {
    res.writeHead(200, { "Content-Type": "image/jpeg" })
    res.end(data)
   }).catch(err => {
    console.error(err)
      res.writeHead(500, { "Content-Type": "text/plain" })
      res.end("Something went wrong...")
   })
   return;
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
})
