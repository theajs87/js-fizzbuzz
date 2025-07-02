// This is our main function
function fizzbuzz(): void {
  console.log('Hello, World!');

  // Put your code here...
  const readline = require('readline-sync');
  let upto = readline.question("What number would you like to go up to? ");
  let j = parseInt(upto)

  for (let i = 1; i < j + 1; i++) {
    const res: string[] = [];

    if (i % 3 === 0) {
      res.unshift('Fizz');
    }
    if (i % 5 === 0) {
      res.push('Buzz');
    }
    if (i % 7 === 0) {
      res.push('Bang');
    }
    if (i % 17 === 0){
      res.reverse()
    }
    if (!res.length) {
      res.push(i.toString());
    }
    if (i % 11 === 0) {
      res.length = 0;
      res.push('Bong');
    }
    if (i % 13 === 0) {
      res.unshift('Fezz');
    }
    console.log(res.join(''));
  }
}

// Now, we run the main function:
fizzbuzz();
