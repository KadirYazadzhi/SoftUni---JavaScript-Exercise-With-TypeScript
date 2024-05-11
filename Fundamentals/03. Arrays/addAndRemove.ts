type command = Array<'add' | 'remove'>;

function addAndRemove(arrayInput: command) {
    const array :command = arrayInput;
    const newArray :number[] = [];
    let number :number = 1;

   for (let i = 0; i < array.length; i++) {
    if (array[i] === 'add') {
      newArray.push(number);
    } 
    else {
      newArray.pop();
    }
    number++;
  }

  if (!newArray.length) {
    console.log('Empty');
  }
  else {
    console.log(newArray.join(' '));
  }

}

addAndRemove(['add', 'add', 'add', 'add']);
