let fs = require('fs');

/* Utilitzem readFile() i en aquest cas especifiquem la codificació 'utf8'
el parámetre data retornará el contingut de l'arxiu.
*/
fs.readFile('EricFile.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});