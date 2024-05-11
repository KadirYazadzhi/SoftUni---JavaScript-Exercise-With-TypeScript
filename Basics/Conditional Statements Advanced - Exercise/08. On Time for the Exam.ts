function examTime(hourExam: number, minuteExam: number, hourArrival: number, minuteArrival: number): void {
    const examTimeInMinutes = hourExam * 60 + minuteExam;
    const arrivalTimeInMinutes = hourArrival * 60 + minuteArrival;
    const difference = examTimeInMinutes - arrivalTimeInMinutes;

    if (difference < 0) {
        console.log("Late");
    } else if (difference <= 30) {
        console.log("On time");
    } else {
        console.log("Early");
    }

    if (difference !== 0) {
        let hours = Math.abs(Math.floor(difference / 60));
        let minutes = Math.abs(difference % 60);

        if (hours > 0) {
            console.log(`${hours}:${minutes < 10 ? '0' : ''}${minutes} hours ${difference < 0 ? 'after' : 'before'} the start`);
        } else {
            console.log(`${minutes} minutes ${difference < 0 ? 'after' : 'before'} the start`);
        }
    }
}
examTime(9, 30, 9, 40);
examTime(9, 30, 9, 20);
examTime(9, 30, 9, 0); 
examTime(9, 30, 10, 0);
examTime(9, 30, 10, 15); 
