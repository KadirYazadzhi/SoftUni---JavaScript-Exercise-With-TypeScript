function sum(a :number, b :number, c :number) :void {
    let counter :number = 0;
    let sp :number = 0;
    for (let i = a; i <= b; i++) {
        for (let j = a; j <= b; j++) {
            counter++;
            if (i + j === c) {
                sp++;
                console.log(`Combination N:${counter} (${i} + ${j} = ${c})`);
                break;
            }
            break
        }
    }
    
    if (sp === 0) {
        console.log(`${counter} combinations - neither equals ${c}`);
    }
}
sum(1, 10 ,5);
sum(23, 24, 20);