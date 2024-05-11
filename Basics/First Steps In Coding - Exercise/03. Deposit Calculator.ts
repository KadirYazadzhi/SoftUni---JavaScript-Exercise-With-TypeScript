function depositCalculater(sum :number, month :number, procent :number) {
    let procentForMonth :number = (sum * (procent / 100)) / 12;

    let total :number = sum + (month * procentForMonth);

    return total;
}
let answer :number = depositCalculater(200, 3, 5.7);
console.log(answer);