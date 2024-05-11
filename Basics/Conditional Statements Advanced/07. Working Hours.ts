function workingHours(time :number, day :string) :void {
    if (time >= 10 && time <= 18 && day != "Sunday") {
        console.log("open");
    }
    else {
        console.log("closed");
    }
}
workingHours(17, "Monday");