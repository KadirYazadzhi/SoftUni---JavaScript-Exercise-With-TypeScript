function fishing(budjet :number, seson :string, count :number) :void {
    let price :number = 0; 
    if (seson === "Spring") {
        price = 3000;
    }
    else if (seson === "Summer" || seson === "Autumn") {
        price = 4200;
    }
    else if (seson === "Winter") {
        price = 2600;
    }

    if (count < 6) {
        price *= 0.9;
    }
    else if (count > 7 && count <= 11) {
        price *= 0.85;
    }
    else if (count > 12) {
        price *= 0.75;
    }

    if (count % 2 == 0 && seson != "Autumn") {
        price *= 0.95;
    }

    if (budjet >= price) {
        console.log(`Yes! You have ${(budjet - price).toFixed(2)} leva left.`);
    }
    else {
        console.log(`Not enough money! You need ${(price - budjet).toFixed(2)} leva.`);
    }
}
fishing(3000, "Summer", 11);