function fuelForTheTrip(distance :number, passengers :number, price :number)  {
    let needFuel :number = (distance / 100) * 7;
    needFuel += passengers * 0.1;
    const total :number = price * needFuel;

    console.log(`Needed money for that trip is ${total} lv`);
}

fuelForTheTrip(260, 9, 2.49);

