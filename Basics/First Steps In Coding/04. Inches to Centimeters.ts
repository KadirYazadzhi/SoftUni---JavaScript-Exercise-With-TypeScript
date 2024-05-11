function inchesToCentimeters(number :number) :void {
    const INC_TO_CEN :number = 2.54;
    let sum :number = number * INC_TO_CEN;
    console.log(sum);
}
inchesToCentimeters(5);