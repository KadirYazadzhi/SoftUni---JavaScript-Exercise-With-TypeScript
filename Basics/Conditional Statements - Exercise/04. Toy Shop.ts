function toyShop(travelPrice :number, puzzle :number, doll :number, bear :number, minion :number, truck :number) :void {
    let count :number = puzzle + doll + bear + minion + truck;
    let total :number = (puzzle * 2.60) + (doll * 3) + (bear * 4.10) + (minion * 8.20) + (truck * 2);
    if (count >= 50) {
        total *= 0.75;
    }
    total *= 0.9;
    if (total > travelPrice) {
        console.log(`Yes! ${(total - travelPrice).toFixed(2)} lv left.`)
    }
    else {
        console.log(`Not enough money! ${(travelPrice - total).toFixed(2)} lv needed.`)
    }
}
toyShop(320, 8, 2, 5, 5, 1);