// This is our main function
function fizzbuzz(): void {
  console.log('Hello, World!');

  // Put your code here...
  const readline = require('readline-sync');
  let upto = readline.question("What number would you like to go up to? ");
  let j = parseInt(upto)

  for (let i = 1; i < j + 1; i++) {
    const res2: string[] = rules(i);
    console.log(res2.join(''));
  }
}

function rules(i) {
    let res: string[] = [];
    // let ruleslist = [
    //     [3, 'Fizz'],
    //     [5, 'Buzz'],
    //     [7, 'Bang'],
    // ];


    if (i % 3 === 0) {
      res.push('Fizz');
    }
    if (i % 5 === 0) {
      res.push('Buzz');
    }
    if (i % 7 === 0) {
      res.push('Bang');
    }
    if (i % 11 === 0) {
      res = [];
      res.push('Bong');
    }
    if (i % 13 === 0) {
      let position = res.findIndex(beforeB);
      res.splice(position, 0, 'Fezz');
    }
    if (i % 17 === 0){
      res.reverse()
    }
    if (!res.length) {
      res.push(i.toString());
    }
    return res
}

function beforeB(value, index, array) {
    return value.startsWith("B")
}

// Now, we run the main function:
fizzbuzz();
