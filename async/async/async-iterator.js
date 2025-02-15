async function readLines() {
  const fs = require("fs");
  const readline = require("readline");

  const fileStream = fs.createReadStream("file.txt");
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  for await (const line of rl) {
    console.log(line);
  }
}

readLines();
