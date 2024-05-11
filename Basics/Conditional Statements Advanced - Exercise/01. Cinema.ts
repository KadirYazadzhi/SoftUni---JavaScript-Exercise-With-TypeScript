function CinemaPrice(type :string, row :number, column :number) :void {
    let sum :number = 0;
    if (type === "Discount") {
        sum = row * column * 5.00;
    }
    else if (type === "Normal") {
        sum = row * column * 7.50;
    }
    else if (type === "Premiere") {
        sum = row * column * 12.00;
    }
    else {
        console.log("error");
    }
    console.log(sum.toFixed(2) + " leva");
}
CinemaPrice("Normal", 10, 12);