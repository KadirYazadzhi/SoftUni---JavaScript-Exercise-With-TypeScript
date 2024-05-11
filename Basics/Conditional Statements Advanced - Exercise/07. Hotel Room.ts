function hotel(month :string, days :number) :void {
    let studioPrice :number = 0;
    let apartmentPrice :number = 0;
    if (month === "May" || month === "October") {
        studioPrice = 50.00;
        apartmentPrice = 65.00;
        if (days > 7 && days <= 14) {
            studioPrice *= 0.95;
        }
        else if (days > 14) {
            studioPrice *= 0.7;
        }
    }
    else if (month === "June" || month === "September") {
        studioPrice = 75.20;
        apartmentPrice = 68.70;
        if (days > 14) {
            studioPrice *= 0.8;
        }
    }
    else if (month === "July" || month === "August") {
        studioPrice = 76.00;
        apartmentPrice = 77.00;
    }

    if (days > 14) {
        apartmentPrice *= 0.9;
    }

    console.log(`Apartment: ${(apartmentPrice * days).toFixed(2)} lv.`);
    console.log(`Studio: ${(studioPrice * days).toFixed(2)} lv.`);
}
hotel("May", 15);