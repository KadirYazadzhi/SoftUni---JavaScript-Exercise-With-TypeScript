function operationBetweenNumber(num1 :number, num2 :number, operator :string) :void {
    let total :number = 0;
    let evenOrOdd :string = "";
    if (operator === "+") {
        total = num1 + num2;
    }
    else if (operator === "-") {
        total = num1 - num2;
    }
    else if (operator === "*") {
        total = num1 * num2;
    }
    else if (operator === "/") {
        if (num2 != 0) {
            total = num1 / num2;
        }
        else {
            console.log(`Cannot divide ${num1} by zero`);
        }
    }
    else if (operator === "%") {
        total = num1 % num2;
    }
    else if (operator === "/") {
        total = num1 / num2;
    }
    if (operator === "+" || operator === "-" || operator === "*") {
        if (total % 2 === 0) {
            evenOrOdd = "even";
        }
        else {
            evenOrOdd = "odd";
        }
        console.log(`${num1} ${operator} ${num2} = ${total} – ${evenOrOdd}`);
    }
    else {
        console.log(`${num1} ${operator} ${num2} = ${total}`);
    }
}
operationBetweenNumber(10, 3, "*");
operationBetweenNumber(99, 3, "/");
operationBetweenNumber(16, 2, "%");
operationBetweenNumber(30, 4, "-");
