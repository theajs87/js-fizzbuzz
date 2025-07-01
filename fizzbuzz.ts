// This is our main function
function fizzbuzz() :void {
    console.log("Hello, World!");

    // Put your code here...
    for (let i = 1; i < 101; i++){
        if (!(i % 15)) console.log("FizzBuzz");
        else if (!(i % 3)) console.log("Fizz");
        else if (!(i % 5)) console.log("Buzz");
        else console.log(i)
    }
}

// Now, we run the main function:
fizzbuzz();
