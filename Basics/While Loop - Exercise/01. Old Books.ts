function oldBook(...books :string[]) {
    let bookToFind :string = books[0];
    let i :number = 1;
    let counter :number = 0;

    while (true) {
        if (books[i] === bookToFind) {
           console.log(`You checked ${counter} books and found it.`);
           break;
        }
        if (books[i] === "No More Books") {
            console.log(`The book you search is not here!`);
            console.log(`You checked ${counter} books.`);
            break;
        }
        counter++;
        i++;
    }

}
oldBook("Troy", "Stronger", "Life Style", "Troy");
oldBook("The Spot", "Hunger Games", "Harry Potter", "Torronto", "Spotify", "No More Books");