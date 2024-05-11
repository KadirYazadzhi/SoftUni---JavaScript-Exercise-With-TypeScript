function sumNumbers(str :string) :void {
    let sum :number = 0;
    for (let i = 0; i < str.length; i++) {
        let number :number;
        number = Number(str[i]);
        sum += number;
    }
    console.log(`The sum of the digits is:${sum}`);
}
sumNumbers("1234");