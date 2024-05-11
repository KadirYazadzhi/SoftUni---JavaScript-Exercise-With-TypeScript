function yardGreening(number :number) :void {
    const PRICE_FOR_ONE_METER :number = 7.61;

    let priceWithoutDiscount :number = PRICE_FOR_ONE_METER * number;
    let discount :number = priceWithoutDiscount * 0.18;
    let priceWithDiscount :number = priceWithoutDiscount - discount;

    console.log(`The final price is: ${priceWithDiscount} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}
yardGreening(500);