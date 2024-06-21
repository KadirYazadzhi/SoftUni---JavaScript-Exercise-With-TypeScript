function validNumber(num :number) :void {
    if (num !== 0 && num < 100 || num > 200) {
        console.log("invalid");
    }
}
validNumber(20);
validNumber(150);