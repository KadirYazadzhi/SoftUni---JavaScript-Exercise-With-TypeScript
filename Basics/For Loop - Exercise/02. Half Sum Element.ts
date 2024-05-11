function halfSum(num :number) :void {
    let sum :number = 0;
    for (let i = 1; i <= 10; i++) {
        sum = i * num;
        console.log(`${i} * ${num} = ${sum}`);
    }
}
halfSum(5);