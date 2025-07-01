// This is our main function
function fizzbuzz() :void {
    console.log("Hello, World!");

    // Put your code here...
    for (let i = 1; i < 101; i++){
        let res: string = ""

        if (i % 3 === 0) {
            res = res + "Fizz"
        }
        if (i % 5 === 0) {
            res = res + "Buzz"
        }
        if (i % 7 === 0) {
            res = res + "Bang"
        }
        if (res === "") {
            res = res + i
        }
        console.log(res)
    }
}

// Now, we run the main function:
fizzbuzz();
