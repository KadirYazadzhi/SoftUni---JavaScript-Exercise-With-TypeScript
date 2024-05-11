function passwordGuesses(password :string) :void {
    if (password === "s3cr3t!P@ssw0rd") {
        console.log("Welcome");
    }
    else {
        console.log("Wrong password!");
    }
}
passwordGuesses("s3cr3t!P@ssw0rd");