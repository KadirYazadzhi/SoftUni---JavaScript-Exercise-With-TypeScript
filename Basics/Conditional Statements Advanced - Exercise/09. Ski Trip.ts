function skiTrip(days :number, type :string, asses :string) :void {
    let price :number = 0;
    if (type === "room for one person") {
        price = 18.00;
    }
    else if (type === "apartment") {
        price = 25.00;
        if (days <= 10) {
            price *= 0.7;
        }
        else if (days > 10 && days <= 15) {
            price *= 0.65;
        }
        else {
            price *= 0.5;
        }
    }
    else if (type === "president apartment") {
        price = 35.00;
        if (days <= 10) {
            price *= 0.9;
        }
        else if (days > 10 && days <= 15) {
            price *= 0.85;
        }
        else {
            price *= 0.8;
        }
    }

    if (asses === "positive") {
        price *= 1.25;
    }
    else if (asses === "negative") {
        price *= 0.9;
    }

    console.log((price * (days -1)).toFixed(2));
}
skiTrip(14, "apartment", "positive");