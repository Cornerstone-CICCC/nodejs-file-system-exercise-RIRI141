"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Check the README.md file for instructions to the exercise
const http_1 = __importDefault(require("http"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const url_1 = __importDefault(require("url"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const directory = "images";
const filePath = path_1.default.join(__dirname, directory);
const server = http_1.default.createServer((req, res) => {
    const { method } = req;
    const parsedUrl = url_1.default.parse(req.url || "", true);
    const { pathname } = parsedUrl;
    let fileName = "veryhappydog.jpg";
    if (pathname === "/view-image" && method === "GET") {
        fs_1.default.readFile(`${filePath}/${fileName}`, (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-type": "text/plain" });
                res.end("Eror reading file!");
                return;
            }
            res.writeHead(200, { "Content-type": "image/jpeg" });
            res.end(data);
        });
        return;
    }
});
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}}`);
});
