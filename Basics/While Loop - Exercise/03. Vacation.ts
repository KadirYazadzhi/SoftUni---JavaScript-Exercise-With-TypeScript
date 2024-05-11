function vacation(MoneyForTrip :number, money :number, ...args :string[]) {
    let i :number = 0;
    let name :string = "";
    let num :number = 0;
    let count :number = 0;
    let badCount :number = 0;

    while (i != args.length) {
        if (i % 2 != 0) {
            num = Number(args[i]);
            money += num;
        }
        else {
            name = args[i];
            if (name === "spend") {
                badCount++;
                money -= num;
                if (money < 0) {
                    money = 0;
                }
            }
            else if (name === "save") {
                money += num;
            }
        }
        count++;
        if (badCount > 5) {
            console.log(`You can't save the money.`);
            console.log(count);
            break;
        }
        if (money >= MoneyForTrip) {
            console.log(`You saved the money for ${count} days.`);
            break;
        }
        i++;
    }
}

vacation(2000, 1000, "spend", "1200", "save", "2000");