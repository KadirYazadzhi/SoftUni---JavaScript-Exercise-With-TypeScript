function printBuildingFloorsAndRooms(floors: number, roomsPerFloor: number): void {
    for (let floor = floors + 1; floor > 1; floor--) {
        let output = "";

        for (let room = roomsPerFloor - 1; room >= 0; room--) {
            if (floor === floors + 1) {
                output = `L${floor - 1}${room}` + " " + output;
            } else if (floor % 2 !== 0) {
                output = `O${floor - 1}${room}` + " " + output;
            } else {
                output = `A${floor - 1}${room}` + " " + output;
            }
        }
        console.log(output);
    }
}
printBuildingFloorsAndRooms(6, 5);