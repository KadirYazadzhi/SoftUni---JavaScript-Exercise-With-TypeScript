function swimmingPool(recordInSecond :number, distance :number, timeForOneMeter :number) :void {
    let time :number = distance * timeForOneMeter;
    let plusTime = Math.round(distance / 15) * 12.5
    time += plusTime;

    if (time < recordInSecond) {
        console.log(`Yes, he succeeded! The new world record is ${time.toFixed(2)} seconds.`);
    }
    else {
        console.log(`No, he failed! He was ${(time - recordInSecond).toFixed(2)} seconds slower.`)
    }
}
swimmingPool(10464, 1500, 20);
swimmingPool(55555.67, 3017, 5.03);