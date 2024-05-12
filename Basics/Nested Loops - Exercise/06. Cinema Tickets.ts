function cinemaTickets(input :string[]) :void {
    let index :number = 0;
    let command :string = input[index++];
     
    let studentsCount :number = 0;
    let standardCount :number = 0;
    let kidsCount :number = 0;
     
    while (command !== "Finish") {
    let movieName :string = command;
    let freeSpace :number = Number(input[index++]);
    let tempCommand :string = input[index++];
    let soldTicked :number = 0;

    while (tempCommand !== "End") {
        let tickedType :string = tempCommand;
        soldTicked++;
     
        switch (tickedType) {
            case "student": studentsCount++; break;
            case "standard": standardCount++; break;
            case "kid": kidsCount++; break;
        }
        if (freeSpace <= soldTicked) {
            break;
        }
        tempCommand = input[index++]
    }
    let totalSpace :number = soldTicked / freeSpace * 100;
    console.log(`${movieName} - ${totalSpace.toFixed(2)}% full.`);
     
    command = input[index++];
    }
    let totalTicked :number = standardCount + studentsCount + kidsCount;
    let studentP :number = studentsCount / totalTicked * 100;
    let standardP :number = standardCount / totalTicked * 100;
    let kidP :number = kidsCount / totalTicked * 100;
    console.log(`Total tickets: ${totalTicked}`);
    console.log(`${studentP.toFixed(2)}% student tickets.`);
    console.log(`${standardP.toFixed(2)}% standard tickets.`);
    console.log(`${kidP.toFixed(2)}% kids tickets.`);
     
    }
    cinemaTickets(["The Matrix", "20", "student", "standard", "kid", "kid", "student", "student", "standard", "student", "End","The Green Mile",
    "17", "student", "standard", "standard", "student", "standard", "student", "End", "Amadeus", "3", "standard", "standard", "standard","Finish"])
    