// Creamos 3 constantes para poder interactuar con los archivos de sistema (require('fs'))
const fs = require('fs');

// creamos 1 constante para poder trabajar con rutas de directorio y archivos (require('path'))
const path = require('path');

// creamos 1 constante para usar Promisify que será una Promise y devolverá error o el resultado 
//si todo va bien
const util = require('util');

// Creamos 2 constantes en las que utilizamos la constante join para añadir el path de donde estarán nuestras
// carpetas inbox y outbox y en la que dentro de inbox habrá uno o varios archivos que pasarán a outbox
const inbox = path.join("C:\\Users\\Eric\\Desktop\\Curs_NodeJS\\Sprint_3_Basics_Patterns\\Patterns\\", "inbox");
const outbox = path.join("C:\\Users\\Eric\\Desktop\\Curs_NodeJS\\Sprint_3_Basics_Patterns\\Patterns\\", "outbox");

// Revertimos el orden del texto
const reverseText = str =>
    str
        .split("")
        .reverse()
        .join("");

// Creamos 3 constantes que serán objetos promisify, es decir, promesas del módulo UTIl de NODE
// y que englobarán la lectura del path, archivo y escritura como promesas
const readdir = util.promisify(fs.readdir);
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

// Usamos la constante readdir para acceder al path de inbox y obtener los ficheros del path
// Hacemos un map para obtener cada uno de los archivos que encuentre
// Si todo sale bien devolverá mensaje de que se ha procesado sino devolverá error.
readdir(inbox)
    .then(files => files.map(file =>readFile(path.join(inbox, file), "utf8")
    .then(reverseText)
    .then(data => writeFile(path.join(outbox, file), data))
    .then(() => console.log(`${file} has been processed!`))))
    .catch(err => console.log(err));