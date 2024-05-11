function sumNumber(n :number, ...args :number[]) :void {
    let sum :number = 0;
    let i :number = 0;
    while (sum < n) {
        sum += args[i];
        i++
    }
    console.log(sum);
}
sumNumber(100, 10, 20, 30, 40);