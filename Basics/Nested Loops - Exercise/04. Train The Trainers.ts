function trainers(...args: (number | string)[]): void {
    let n: number = Number(args[0]);
    let subject: string = "";
    let score: number = 0;
    let i: number = 1;
    let average: number = 0;
    let count: number = 0;
    let sum: number = 0;

    while (args[i] !== "Finish") {
        if (typeof args[i] === "string") {
            subject = String(args[i]);
            score = 0;
            for (let j = 1; j <= n; j++) { 
                score += Number(args[i + j]); 
            }
            average = score / n;
            console.log(`${subject} - ${average.toFixed(2)}`);
            sum += average;
            count++;
            i += n + 1;
        }
    }
    console.log(`Student's final assessment is ${(sum / count).toFixed(2)}`);
}

trainers(2, "While-Loop", 6.00, 5.50, "For-Loop", 5.84, 5.66, "Finish");