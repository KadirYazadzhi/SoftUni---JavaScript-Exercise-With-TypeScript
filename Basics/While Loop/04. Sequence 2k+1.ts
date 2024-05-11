function sequence(num :number) :void {
    let i :number = 1;

    while (i <= num) {
        console.log(i);
        i = 2 * i + 1;
    }
}
sequence(31);