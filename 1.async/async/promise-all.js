const fs = require("fs").promises;

async function readFile() {
  try {
    const [file1, file2] = await Promise.all([
      fs.readFile("file.txt", "utf8"),
      fs.readFile("file2.txt", "utf8"),
    ]);
    console.log(file1);
    console.log(file2);
  } catch (err) {
    console.log(err);
  }
}

readFile();
