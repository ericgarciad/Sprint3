const fs = require('fs');

let name = "My name is Eric Garcia Domingo"

/* Creamos un nuevo archivo llamado EricFile.txt y le pasamos el texto que
escribirá en el interior del archivo mediante la variable: name
*/
fs.writeFile("EricFile.txt", name, (err) => {
    // Controlamos posibles errores
    if(err) throw err;
 
    console.log("File saved!");
}); 

