function time(hours :number, minutes :number) :void {
    minutes += 15;
    if (minutes > 60) {
        hours++;
        minutes -= 60;
        if (hours === 23) {
            hours = 0;
        }
    }
    if (minutes < 10) {
        console.log(`${hours}:0${minutes}`);
    }
    else {
        console.log(`${hours}:${minutes}`);
    }
}
time(1, 46);