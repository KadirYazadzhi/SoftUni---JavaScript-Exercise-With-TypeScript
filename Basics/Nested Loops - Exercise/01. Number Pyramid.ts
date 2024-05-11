function printNumberPyramid(n: number): void {
    let currentNumber :number = 1;
    for (let i = 1; currentNumber <= n; i++) {
        let row :string = '';
        
        for (let j = 1; j <= i; j++) {
            if (currentNumber > n) {
                break;
            }
            row += currentNumber.toString() + ' ';
            currentNumber++;
        }
        console.log(row);
    }
}

const n = 7;
printNumberPyramid(n);