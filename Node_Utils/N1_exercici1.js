
function printMessage(i) {
    setTimeout(() => {
        console.log("Imprimint missatge");
        printMessage(++i);
    }, 1000)
}

printMessage(0);

