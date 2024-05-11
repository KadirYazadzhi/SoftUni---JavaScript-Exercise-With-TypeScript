function minCoinsChange(amount: string): number {
    let parsedAmount: number = parseFloat(amount);
    let totalCoins: number = 0;
    let totalAmountInCents: number = parsedAmount * 100;

    const coins: number[] = [200, 100, 50, 20, 10, 5, 2, 1];

    for (let i = 0; i < coins.length; i++) {
        const currentCoins: number = Math.floor(totalAmountInCents / coins[i]);
        totalCoins += currentCoins;
        totalAmountInCents -= currentCoins * coins[i];
    }

    return totalCoins;
}

console.log(minCoinsChange("1.23"));
console.log(minCoinsChange("2"));   
console.log(minCoinsChange("0.56")); 
console.log(minCoinsChange("2.73")); 