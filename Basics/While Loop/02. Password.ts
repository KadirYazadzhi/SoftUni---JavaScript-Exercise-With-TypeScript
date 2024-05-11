function password(...args :string[]) :void {
    let username :string = args[0];
    let password :string = args[1];
    let data :string = args[2];
    let index :number = 3; 

    while (data != password) {
        data = args[index];
        index++;
    }
    console.log(`Welcome ${username}!`)
}
password("Nakov", "1234", "Pass", "1324", "1234");