function fishTank(a :number, b :number, c :number, procent :number) {
    let tankCapacityInLiter = ((a * b * c) / 1000) * (1 - (procent / 100));
    console.log(tankCapacityInLiter);
}
fishTank(85, 75, 47, 17);