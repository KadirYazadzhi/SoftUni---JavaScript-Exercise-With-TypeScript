function numberSequence(num1 :number, num2 :number) :void {
    let sum :number = 0;
    for (let i = num1; i < num2; i++) {
        if (i % 9 === 0) {
            sum += i;
        }
    }

    console.log(`The sum: ${sum}`);
       
    for (let i = num1; i < num2; i++) {
        if (i % 9 === 0) {
            console.log(i);
        }
    }
}
numberSequence(100, 200);