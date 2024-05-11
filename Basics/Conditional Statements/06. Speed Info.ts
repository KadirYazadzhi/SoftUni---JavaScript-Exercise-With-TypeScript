function speedInfo(speed :number) :void {
    if (speed <= 10) {
        console.log("slow");
    }
    else if (speed > 10 && speed <= 50) {
        console.log("average");
    }
    else if (speed > 50 && speed <= 150) {
        console.log("fast");
    }
    else if (speed > 150 && speed <= 100) {
        console.log("ultra fast");
    }
    else {
        console.log("extremely fast");
    }
}
speedInfo(200);
