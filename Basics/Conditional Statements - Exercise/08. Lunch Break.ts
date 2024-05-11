function lunchBrake(serialName :string, episodTime :number, breakTime :number) :void {
    breakTime -= (breakTime / 8) + (breakTime / 4);
    if (breakTime >= episodTime) {
        console.log(`You have enough time to watch ${serialName} and left with ${breakTime - episodTime} minutes free time.`);
    }
    else {
        console.log(`You don't have enough time to watch ${serialName}, you need ${episodTime - breakTime} more minutes.`);
    }
}
lunchBrake("Game of Thrones", 60, 96);