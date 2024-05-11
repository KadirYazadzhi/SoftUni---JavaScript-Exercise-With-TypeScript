function walking(...args :(string|number)[]) {
    let i :number = 0;
    let steps :number = 0;

    while (args.length != i) {
        if (typeof args[i] === "number" && !isNaN(Number(args[i]))) {
            steps += Number(args[i]);
        }
        else if (typeof args[i] === "string") {
            if (args[i] === "Going home") {
                let inew :number = i;
                if (inew === i + 1) {
                    break;
                } 
            }
        }
        i++;
    }
    if (steps >= 10000) {
        console.log(`Goal reached! Good job!`);
        console.log(`${steps - 10000} steps over the goal!`);
    }
    else {
        console.log(`${10000 - steps} more steps to reach goal.`);
    }
}
walking(1000, 1500, 2000, 6500);
walking(1500, 3000, 250, 1548, 2000, "Going home", 2000);