function graduation(...args :string[]) {
    let username :string = args[0];
    let countBadGrade :number = 0;
    let count :number = 0;
    let i :number = 1;
    let average :number = 0;

    while (countBadGrade < 2) {
        if (Number(args[i]) < 4.00) {
            countBadGrade++;
        }
        if (count >= 12) {
            break;
        }
        count++;
        average += Number(args[i]);
        i++;
    }

    average = average / count;

    if (average < 4.00 || countBadGrade >= 2) {
        count--;
        console.log(`${username} has been excluded at ${count} grade`)
    }
    else {
        console.log(`${username} graduated. Average grade: ${average.toFixed(2)}`)
    }
}
graduation("Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3");
graduation("Gosho", "5", "5.5", "6", "5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5");