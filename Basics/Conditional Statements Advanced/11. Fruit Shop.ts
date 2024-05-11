function fruitShop(fruit :string, day :string, count :number) {
    if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
        if (fruit === "banana") {
            console.log(count * 2.50)
        }
        else if (fruit === "apple") {
            console.log(count * 1.20)
        }
        else if (fruit === "orange") {
            console.log(count * 0.85)
        }
        else if (fruit === "grapefruit") {
            console.log(count * 1.45)
        }
        else if (fruit === "kiwi") {
            console.log(count * 2.70)
        }
        else if (fruit === "pineapple") {
            console.log(count * 5.50)
        }
        else if (fruit === "grapes") {
            console.log(count * 3.85)
        }
        else {
            console.log("error");
        }
    }
    else if (day === "Saturday" || day === "Sunday") {
        if (fruit === "banana") {
            console.log(count * 2.70)
        }
        else if (fruit === "apple") {
            console.log(count * 1.25)
        }
        else if (fruit === "orange") {
            console.log(count * 0.90)
        }
        else if (fruit === "grapefruit") {
            console.log(count * 1.60)
        }
        else if (fruit === "kiwi") {
            console.log(count * 3.00)
        }
        else if (fruit === "pineapple") {
            console.log(count * 5.60)
        }
        else if (fruit === "grapes") {
            console.log(count * 4.20)
        }
        else {
            console.log("error");
        }
    }
    else {
        console.log("error");
    }
}
fruitShop("grapes", "Monday", 6);