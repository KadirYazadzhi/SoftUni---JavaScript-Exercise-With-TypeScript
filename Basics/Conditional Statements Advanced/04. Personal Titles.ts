function personalType(age :number, sex :string) :void {
    if (age => 16) {
        if (sex === "m") {
            console.log("Mr.");
        }
        else if (sex === "f") {
            console.log("Ms.");
        }
    }
    else {
        if (sex === "m") {
            console.log("Master");
        }
        else if (sex === "f") {
            console.log("Miss");
        }
    }
}
personalType(18, "f");
personalType(14, "m");