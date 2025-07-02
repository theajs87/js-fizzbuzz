// This is our main function
function fizzbuzz(): void {
  console.log('Hello, World!');

  // Put your code here...
  const readline = require('readline-sync');
  let upto = readline.question("What number would you like to go up to? ");
  let j = parseInt(upto)

  for (let i = 1; i < j + 1; i++) {
    console.log(rules(i).join(''));
  }
}

function rules(i) {
    let res: string[] = [];
    let ruleslist : [number,string,string][]= [
        [3, 'Fizz', ''],
        [5, 'Buzz', ''],
        [7, 'Bang', ''],
        [11, 'Bong', 'reset'],
        [13, 'Fezz', 'before B'],
        [17, '', 'reverse']
    ];

    for (let rule of ruleslist) {
        if (i % rule[0] === 0) {
            if (rule[2] === 'reset') {
                res = [];
            }
            res.push(rule[1]);
            if (rule[2] === 'before B') {
                let position = res.findIndex(beforeB);
                res.splice(position, 0, rule[1]);
            }
            if (rule[2] === 'reverse') {
                res.reverse();
            }
        }
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
