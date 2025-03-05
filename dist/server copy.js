"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Check the README.md file for instructions to the exercise
const http_1 = __importDefault(require("http"));
const path_1 = __importDefault(require("path"));
const url_1 = __importDefault(require("url"));
const fileFunc_1 = require("./fileFunc");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const directory = "images";
const docsDirectory = path_1.default.join(__dirname, directory);
const server = http_1.default.createServer((req, res) => {
    const { method } = req;
    const parsedUrl = url_1.default.parse(req.url || "", true);
    const { pathname } = parsedUrl;
    if (pathname === "/" && method === "GET") {
        res.writeHead(200, { "Content-type": "text/plain" });
        res.end("Welocome to my server");
        return;
    }
    if (pathname === "/view-image" && method === "GET") {
        (0, fileFunc_1.readFile)(path_1.default.join(docsDirectory, "veryhappydog.jpg")).then(data => {
            res.writeHead(200, { "Content-Type": "image/jpeg" });
            res.end(data);
        }).catch(err => {
            console.error(err);
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Something went wrong...");
        });
        return;
    }
});
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
