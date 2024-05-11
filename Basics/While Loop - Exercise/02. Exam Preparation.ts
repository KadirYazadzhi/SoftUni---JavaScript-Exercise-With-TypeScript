function examPreparation(n :number, ...args :string[]) {
    let name :string = "";
    let grade :number = 0;
    let average :number = 0;
    let badGrade :number = 0;
    let count :number = 0;
    let i :number = 0;

    while (true) {
        if (i % 2 == 0 && args[i] != "Enough") {
            name = args[i];
            count++;
        }
        else {
            grade = Number(args[i]);
             average += grade;
        }
        i++;
        if (grade < 4.00) {
            badGrade++;
        }
        if (badGrade > n) {
            console.log(`You need a break, ${badGrade} poor grades."`);
            break;
        }
        if (args[i] === "Enough") {
            average = average / count;
            console.log(`Average score: ${average}`);
            console.log(`Number of problems: ${count}`);
            console.log(`Last problem: ${name}`);
            break;
        }
    }
}
examPreparation(3,"Money", "6", "Story", "4", "SpringTime", "5", "Bus", "6", "Enough");