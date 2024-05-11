function journeys(budjet :number, seson :string) :void {
    let type :string = "";
    let place :string = "";
    let total :number = 0;

    if (budjet <= 100) {
        if (seson === "summer") {
            total = budjet * 0.3;
            type = "Camp";
        }
        else {
            total = budjet * 0.7;
            type = "Hotel";
        }
        place = "Bulgaria";
    }
    else if (budjet > 100 && budjet <= 1000) {
        if (seson === "summer") {
            total = budjet * 0.4;
            type = "Camp";
        }
        else {
            total = budjet * 0.8;
            type = "Hotel";
        }
        place = "Balkans";
    }
    else {
        total = budjet * 0.9;
        type = "Hotel";
        place = "Europe";
    }

    console.log(`Somewhere in ${place}`);
    console.log(`${type} – ${total}`)
}
journeys(50, "summer");