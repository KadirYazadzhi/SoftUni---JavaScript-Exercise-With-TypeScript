function balance(...args :string[]) :void {
    let i :number = 0;
    let num :number = 0;
    let sum :number = 0;

    while (args[i] != "NoMoreMoney") {
        num = Number(args[i]);
        if (num < 0) {
            console.log(`Invalid operation!`);
            break;
        }
        sum += num;
        console.log(`Increase: ${num.toFixed(2)}`);
        i++;
    }
    console.log(`Total: ${sum.toFixed(2)}`);
}
balance("5.51", "69.42", "100", "NoMoreMoney");