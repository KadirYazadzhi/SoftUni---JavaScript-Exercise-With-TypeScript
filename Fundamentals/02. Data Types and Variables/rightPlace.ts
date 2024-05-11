function rightPlace(string :string, char :string, result :string) {
    const word :string = string.replace('_', char);
    const output :string = word === result ? 'Matched' : 'Not Matched';

    console.log(output);
}

rightPlace('Str_ng', 'I', 'Strong');