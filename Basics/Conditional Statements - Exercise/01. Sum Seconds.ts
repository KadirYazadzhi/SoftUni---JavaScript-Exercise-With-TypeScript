function SumSecond(timeFirst :number, timeSecond :number, timeThird :number) :void {
    let totalTime :number = timeFirst + timeSecond + timeThird;
    let minutes :number = Math.floor(totalTime / 60);
    let seconds :number = totalTime % 60;

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    }
    else {
        console.log(`${minutes}:${seconds}`);
    }
}
SumSecond(35, 45, 44);