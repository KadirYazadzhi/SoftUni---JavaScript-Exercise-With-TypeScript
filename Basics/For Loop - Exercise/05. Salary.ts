function salary(tabs :number, salary :number, ...args :string[]) {
    for (let i = 0; i <= args.length; i++) {
        if (args[i] === "Facebook") {
            salary -= 150;
        }
        else if (args[i] === "Instagram") {
            salary -= 100;
        }
        else if (args[i] === "Reddit") {
            salary -= 50;
        }
    }

    if (salary <= 0) {
        console.log(`You have lost your salary.`);
    }
    else {
        console.log(salary);
    }
}
salary(2, 750, "Facebook", "Instagram");