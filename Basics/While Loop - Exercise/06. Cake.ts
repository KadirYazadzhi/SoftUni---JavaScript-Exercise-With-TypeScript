function Cake(...args :(number | string)[]) :void {
    let width :number = Number(args[0]);
    let height :number = Number(args[1]);
    let all :number = width * height;
    let i :number = 2;

    while(true) {
        if (typeof args[i] === "number") {
            all -= Number(args[i]);
            if (all < 0) {
                console.log(`No more cake left! You need ${Math.abs(all)} pieces more.`);
                break;
            }
        }
        else if (typeof args[i] === "string" && args[i] === "STOP") {
            console.log(`${all} pieces are left.`);
            break;
        }
        i++;
    }
    
}
Cake(10, 10, 20, 20, 20, 20, 21);
Cake(10, 10, 20, 30, "STOP");