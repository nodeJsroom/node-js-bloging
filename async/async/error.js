const fs = require("fs").promises;

async function readFile() {
  try {
    const data = await fs.readFile("file.txt", "utf8");
    console.log(data);
  } catch (err) {
    console.log("Failed read File", err);
  }
}
readFile();
