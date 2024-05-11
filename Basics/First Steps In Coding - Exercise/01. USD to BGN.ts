function USDtoBGN(number :number) :number {
    const USD_BGN :number = 1.7954;
    return number * USD_BGN;
}
let USD :number = USDtoBGN(100);
console.log(USD);