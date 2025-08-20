const os = require("os");
const fs = require("fs");
//const res = fs.readFileSync("./hi.text", "utf-8");
//console.log(res);
fs.writeFileSync("./test.txt", "Jai Shree Ram Ji Jai Sita Maa");
console.log(os.cpus().length);
