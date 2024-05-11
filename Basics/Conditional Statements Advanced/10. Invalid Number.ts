function validNumber(num :number) :void {
    if (num < 100 && num > 200 && num != 0) {
        console.log("invalid");
    }
}
validNumber(20);
validNumber(150);