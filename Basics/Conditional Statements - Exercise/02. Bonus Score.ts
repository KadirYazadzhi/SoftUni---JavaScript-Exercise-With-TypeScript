function bonusScore(score :number) :void {
    let point :number = 0;
    if (score < 100) {
        point += 5;
    }
    if (score > 100 && score < 1000) {
        point = score * 1.2;
    }
    if (score > 1000) {
        point = score * 1.1;
    }
    if (score % 2 === 0) {
        point += 1;
    }
    if (score % 10 === 5) {
        point += 2;
    }

    console.log(point);
    console.log(score + point);
}
bonusScore(20);