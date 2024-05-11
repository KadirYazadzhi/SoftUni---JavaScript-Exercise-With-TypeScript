function moving(width :number, length :number, height :number, ...args :(number | string)[]) {
    let allSpace :number = width * length * height;
    let i :number = 0;

    while (allSpace > 0 && args[i] != "Done") {
        if (typeof args[i] === "number") {
            allSpace -= Number(args[i]);
        }
        i++;
    }

    if (typeof args[i] === "string") {
        console.log(`${allSpace} Cubic meters left.`);
    }

    if (allSpace < 0) {
        console.log(`No more free space! You need ${Math.abs(allSpace)} Cubic meters more.`);
    }
}
moving(5, 10, 10, 100, 300, 120);
moving(5, 10, 10, 100, 100, 100, "Done");
