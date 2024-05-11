function foodDelivery(chickenMenu :number, fishMenu :number, veganMenu :number) :void {
    let totalWithoutDelivery :number = (chickenMenu * 10.35) + (fishMenu * 12.40) + (veganMenu * 8.15);
    let dessert :number = totalWithoutDelivery * 0.2;
    let total :number = totalWithoutDelivery + dessert + 2.50;
    console.log(total);
}
foodDelivery(2, 4, 3);