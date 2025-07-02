// This is our main function
function fizzbuzz(): void {
    console.log('Hello, World!');

  // Put your code here...
    let initrules : [number, RuleFunction][]= [
        [3, (res) => {
            res.push('Fizz');
            return res}],
        [5, (res) => {
            res.push('Buzz');
            return res}],
        [7, (res) => {
            res.push('Bang');
            return res}],
        [11, (res) => {
            res.length = 0;
            res.push('Bong');
            return res}],
        [13, (res) => {
            let position = res.findIndex(beforeB);
            if (position === -1){
                res.push('Fezz')
            }
            return res.splice(position, 0, 'Fezz');
        }],
        [17, (res)=>{return res.reverse()}]
    ];

    const readline = require('readline-sync');
    let upto = readline.question("What number would you like to go up to? ");
    let whichrules = readline.question(`Which rules would you like to keep? (for 3, 5, 7, 11, 13, 17)
        Please type the numbers of rules you want to keep, separated by spaces. e.g. '3 5 11' `)
    const keeprules = whichrules.split(" ").map(Number);

    let ruleslist: [number, RuleFunction][] = initrules.filter((rule) => keeprules.includes(rule[0]))

    for (let i = 1; i < parseInt(upto) + 1; i++) {
        console.log(apply_rules(i, ruleslist).join(''));
    }
}

function apply_rules(idx, ruleslist) {
    let res: string[] = [];

    for (let rule of ruleslist) {
        if (idx % rule[0] === 0) {
            res = rule[1](res)
        }
    }
    if (!res.length) {
        res.push(idx.toString());
    }

    return res
}

type RuleFunction = (prev: string[]) => string[]

function beforeB(value, index, array) {
    return value.startsWith("B")
}

// Now, we run the main function:
fizzbuzz();
