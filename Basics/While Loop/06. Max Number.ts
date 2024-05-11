function maxNumbers(...args :string[]) {
    let i :number = 0
    let maxNumber :number = Number.MIN_SAFE_INTEGER;

    while (args[i] != "Stop") {
       if (maxNumber < Number(args[i])) {
        maxNumber = Number(args[i]);
       }
       i++;
    }
    console.log(maxNumber);
}
maxNumbers("100", "99", "80", "70", "Stop");