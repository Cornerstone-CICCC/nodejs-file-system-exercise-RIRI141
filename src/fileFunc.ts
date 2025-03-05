import fs from "fs";
import path from "path";

export const readFile = async (filePath: string) => {
//   const directory = "images";
//   const docsDirectory = path.join(__dirname, directory);
  try {
    // const filePath = path.join(docsDirectory, filename);
    const data = await fs.promises.readFile(filePath);
    return data;
  } catch (err) {
    throw new Error("Something went wrong...");
  }
};
