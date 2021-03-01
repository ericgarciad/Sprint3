//Per a comprimir fem servir el mòdul zlib
let zlib = require('zlib');
// També el mòdul fs - File System
let fs = require('fs');

let gzip = zlib.createGzip();
let source = fs.createReadStream('./EricFile.txt');
let destination = fs.createWriteStream('./EricFile.gz');
// Fem servir .pipe per encadenar 2 streams que s'escriu en un a través de la 
// lectura d'un altre i viceversa.
source.pipe(gzip).pipe(destination);