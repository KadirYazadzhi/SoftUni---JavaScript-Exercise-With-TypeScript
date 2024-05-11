function magicSum(array :number[], number :number) {
    let sum :number = 0;

    for (let i = 0; i < array.length; i++) {
        const currentNum :number = array[i];

        for (let b = i + 1; b < array.length; b++) {
            const nextNum :number = array[b];
            sum = currentNum + nextNum;

            if (sum === number) {
                console.log(Number(currentNum) + ' ' + Number(nextNum))
            }
        }
    }
}

magicSum([1, 7, 6, 2, 19, 23], 8);
