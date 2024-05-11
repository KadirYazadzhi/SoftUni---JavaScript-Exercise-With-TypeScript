function minNumbers(...args :string[]) {
    let i :number = 0
    let minNumber :number = Number.MAX_SAFE_INTEGER;

    while (args[i] != "Stop") {
       if (minNumber > Number(args[i])) {
        minNumber = Number(args[i]);
       }
       i++;
    }
    console.log(minNumber);
}
minNumbers("10", "-100", "-20", "60", "Stop");