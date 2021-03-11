const fs = require('fs');
const path = require('path');
const util = require('util');

const inbox = path.join("C:\\Users\\Eric\\Desktop\\Curs_NodeJS\\Sprint_3_Basics_Patterns\\Patterns\\", "inbox");
const outbox = path.join("C:\\Users\\Eric\\Desktop\\Curs_NodeJS\\Sprint_3_Basics_Patterns\\Patterns\\", "outbox");

const reverseText = str =>
    str
        .split("")
        .reverse()
        .join("");

const readdir = util.promisify(fs.readdir);
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

readdir(inbox)
    .then(files => files.map(file =>readFile(path.join(inbox, file), "utf8")
    .then(reverseText)
    .then(data => writeFile(path.join(outbox, file), data))
    .then(() => console.log(`${file} has been processed!`))))
    .catch(err => console.log(err));