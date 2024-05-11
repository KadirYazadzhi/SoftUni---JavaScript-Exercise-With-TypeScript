function cleverLily(age :number, washerPrice :number, toyPrice :number) :void {
    let sum :number = 10;
    let countToys :number = 0;
    let other :number = 0;

    for (let i = 0; i <= age; i++) {
        if (i % 2 === 0) {
            sum += other;
            other += 10 - 1;
        }
        else {
            countToys++;
        }
    }
    let total :number = 0;
    total = sum + (countToys * toyPrice);

    if (total >= washerPrice) {
        console.log(`Yes ${(total - washerPrice).toFixed(2)}`);
    }
    else {
        console.log(`No ${(washerPrice - total).toFixed(2)}`);
    }
}
cleverLily(10, 170, 6);