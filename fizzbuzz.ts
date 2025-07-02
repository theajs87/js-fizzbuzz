// This is our main function
function fizzbuzz(): void {
  console.log('Hello, World!');

  // Put your code here...
  for (let i = 1; i < 256; i++) {
    const res: string[] = [];

    if (i % 13 === 0) {
      res.unshift('Fezz');
    }
    if (i % 3 === 0) {
      res.unshift('Fizz');
    }
    if (i % 11 === 0) {
      res.push('Bong');
      console.log(res.join(''));
      continue;
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
    console.log(res.join(''));
  }
}

// Now, we run the main function:
fizzbuzz();
