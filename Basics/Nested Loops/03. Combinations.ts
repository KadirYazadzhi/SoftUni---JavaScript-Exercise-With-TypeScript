function combinations(num :number) :void {
    let counter :number = 0;

    for (let a :number = 0; a <= num; a++) {
        for (let b :number = 0; b <= num; b++) {
            for (let c :number = 0; c <= num; c++) {
                if (a + b + c === num) {
                    counter++;
                }
            }
        }
    }
    console.log(counter);
}
combinations(25);