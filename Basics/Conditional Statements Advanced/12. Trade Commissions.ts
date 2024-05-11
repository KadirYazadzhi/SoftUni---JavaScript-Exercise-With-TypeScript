function tradeCommissions(city :string, num :number) {
    if (num > 0 && num <= 500) {
        if (city === "Sofia") {
            num *=  0.05;
        }
        else if (city === "Varna") {
            num *= 0.45;
        }
        else if (city === "Plovdiv") {
            num *= 0.055;
        }
        else {
            console.log("error");
        }
    }
    else if (num > 500 && num <= 1000) {
        if (city === "Sofia") {
            num *=  0.07;
        }
        else if (city === "Varna") {
            num *= 0.75;
        }
        else if (city === "Plovdiv") {
            num *= 0.08;
        }
        else {
            console.log("error");
        }
    }
    else if (num > 1000 && num <= 10000) {
        if (city === "Sofia") {
            num *=  0.08;
        }
        else if (city === "Varna") {
            num *= 0.1;
        }
        else if (city === "Plovdiv") {
            num *= 0.12;
        }
        else {
            console.log("error");
        }
    }
    else if (num > 10000) {
        if (city === "Sofia") {
            num *=  0.12;
        }
        else if (city === "Varna") {
            num *= 0.13;
        }
        else if (city === "Plovdiv") {
            num *= 0.145;
        }
        else {
            console.log("error");
        }
    }
    else {
        console.log("error");
    }

    console.log(num.toFixed(2));
}
tradeCommissions("Sofia", 1500);