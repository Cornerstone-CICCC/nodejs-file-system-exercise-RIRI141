"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readFile = void 0;
const fs_1 = __importDefault(require("fs"));
const readFile = (filePath) => __awaiter(void 0, void 0, void 0, function* () {
    //   const directory = "images";
    //   const docsDirectory = path.join(__dirname, directory);
    try {
        // const filePath = path.join(docsDirectory, filename);
        const data = yield fs_1.default.promises.readFile(filePath);
        return data;
    }
    catch (err) {
        throw new Error("Something went wrong...");
    }
});
exports.readFile = readFile;
