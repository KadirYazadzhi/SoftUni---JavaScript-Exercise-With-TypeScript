function histogram(n: number, ...args: number[]): void {
    let count1: number = 0;
    let count2: number = 0;
    let count3: number = 0;
    let count4: number = 0;
    let count5: number = 0;

    for (let i = 0; i < args.length; i++) {
        if (args[i] < 200) {
            count1++;
        } else if (args[i] >= 200 && args[i] < 400) {
            count2++;
        } else if (args[i] >= 400 && args[i] < 600) {
            count3++;
        } else if (args[i] >= 600 && args[i] < 800) {
            count4++;
        } else if (args[i] >= 800) {
            count5++;
        }
    }
    count1 = (count1 / n) * 100;
    count2 = (count2 / n) * 100;
    count3 = (count3 / n) * 100;
    count4 = (count4 / n) * 100;
    count5 = (count5 / n) * 100;

    console.log(`${count1.toFixed(2)}%`);
    console.log(`${count2.toFixed(2)}%`);
    console.log(`${count3.toFixed(2)}%`);
    console.log(`${count4.toFixed(2)}%`);
    console.log(`${count5.toFixed(2)}%`);
}
histogram(3, 1, 2, 999);
