type loginInput = 
            |[string, string] 
        |[string, string, string] 
    |[string, string, string, string] 
|[string, string, string, string, string];

function Login(input :loginInput) {
    const username :string | undefined = input.shift();
    const password :string | undefined = username?.split('').reverse().join('');

    let failsCounter :number = 0;

    for (let i = 0; i < input.length; i++) {
        const current :string= input[i];

        if (current !== password) {
            failsCounter++;

            if (failsCounter > 3) {
                console.log(`User ${username} blocked!`);
                break;
            }
            console.log(`Incorrect password. Try again.`);
        }
        else {
            console.log(`User ${username} logged in.`);
        }
    }
}

Login(['momo', 'omom']);