function equalSum(num1: number, num2: number): void {
    let sum: string = "";

    for (let i = num1; i < num2; i++) {
        let numString: string = i.toString();
        let evenSum: number = 0;
        let oddSum: number = 0;

        for (let j = 0; j < numString.length; j++) {
            let digit: number = Number(numString[j]);
            if (j % 2 === 0) {
                evenSum += digit;
            } 
            else {
                oddSum += digit;
            }
        }

        if (evenSum === oddSum) {
            sum += i + " ";
        }
    }
    console.log(sum);
}

equalSum(100000, 100050);