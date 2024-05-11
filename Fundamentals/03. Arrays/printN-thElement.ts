function printElement (array :string[]) {
    const newArray :string[] = [];
    const lastElement :number = Number(array.pop());

    for (let i = 0; i < array.length; i++) {
        if (!(i % lastElement)) {
            newArray.push(array[i]);
        }
    }
    console.log(newArray.join(' '));
}

printElement(['5', '20', '31', '4', '20', '2']);

