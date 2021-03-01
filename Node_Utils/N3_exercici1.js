let os = require('os');

let typeOS = os.type();
console.log("Tu sistema operativo es: " + typeOS);

if (typeOS == "Windows_NT") {

    var source = "dir C:\\Users";

} else if (typeOS == "Linux" || typeOS == "Darwin") {

    var source = "ls //usr";

} else {
    console.log("Error");
}

const { exec } = require("child_process");

exec(source, (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});