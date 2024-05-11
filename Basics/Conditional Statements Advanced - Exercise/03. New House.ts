function newHouse(flowersType :string, count :number, budjet :number) :void {
   let price :number = 0;
   let sum :number = 0;

    if (flowersType === "Roses") {
        price = 5.00;
        if (count > 80) {
            price *= 0.9; 
        }
        sum = price * count;   
    }
    else if (flowersType === "Dahlias") {
        price = 3.80;
        if (count > 90) {
            price *= 0.85;
        }
        sum = price * count;   
    }
    else if (flowersType === "Tulips") {
        price = 2.80;
        if (count > 80) {
            price *= 0.85;
        }
        sum = price * count;   
    }
    else if (flowersType === "Narcissus") {
        price = 3.00;
        if (count < 120) {
            price *= 1.15;
        }
        sum = price * count;   
    }
    else if (flowersType === "Gladiolus") {
        price = 2.50;
        if (count < 80) {
            price *= 1.20;
        }
        sum = price * count;   
    }

    if (budjet >= sum) {
        console.log(`Hey, you have a great garden with ${count} ${flowersType} and ${(budjet - sum).toFixed(2)} leva left.`);
    }
    else {
        console.log(`Not enough money, you need ${(sum - budjet).toFixed(2)} leva more.`);
    }
}
newHouse("Roses", 55, 250);