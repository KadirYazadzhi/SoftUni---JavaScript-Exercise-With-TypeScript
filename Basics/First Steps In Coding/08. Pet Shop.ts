function Zoo(foodForDog :number, foodForCat) :string {
    const PRICE_DOG_FOOD :number = 2.50;
    const PRICE_CAT_FOOD :number = 4;

    let priceFoodDog :number = foodForDog * PRICE_DOG_FOOD;
    let priceFoodCat :number = foodForCat * PRICE_CAT_FOOD;

    let Total :number = priceFoodCat + priceFoodDog;

    return `${Total} lv.`;
}
let priceZoo :string = Zoo(5, 5);
console.log(priceZoo);

