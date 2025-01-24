//Exercise Looping

//  1.  Write a code to check whether the number is odd or even
//      Example : 25 -> odd number, 2-> even number

const number: number = 42;

if (number % 2 === 0){
    console.log(`Number ${number} is an Even Number`);
} else if (number % 2 > 0) {
    console.log(`Number ${number} is an Odd Number`);
} else {
    console.log(`Input number wrong`);
}

// ternary code
// console.log(number % 2 ===0 ? "genap" : "ganjil")

//  2.  Write a code to check whether the number is prime number or not
//      Example : 7 -> is a prime number
//      Example : 6 -> is not a prime number

const number2:number = 12;
let isPrime: boolean = number2 > 1 ? true : false;

for (let i = 2 ; i < number2 ; i++) {
    if (number2 % i === 0) {
        isPrime = false;
        break;
    }
}

console.log(isPrime ? "Prime number" : "Not a prime number");

// 3. Write a code to find the sum of the numbers 1 to N
//    Example 5 -> 1 + 2 + 3 + 4 + 5 = 15
//    Example 3 -> 1 + 2 + 3 = 6

const number3: number = 5;
let sum: number = 0;

for (let i = 1 ; i <= number3 ; i++){
    console.log(i);
    console.log(sum);
    sum += i;
    console.log(sum);
}

console.log(sum);

// 4. Write a code to find factorial of a number
//    Example 4! -> 4 x 3 x 2 x 1 = 24
//    Example 6! -> 6 x 5 x 4 x 3 x 2 x 1 = 720

let number4:number = 6;
let factorialResult:number = 1;

for (let i = number4 ; i > 0 ; i--){
     factorialResult *= i;
    console.log(i);
    console.log(factorialResult);
}

console.log(`The factorial result of ${number4} is ${factorialResult}`);

// 5. Write a code to print the first N fibonacci numbers
//    Example 15 -> 610

const number5:number = 15;
let f1:number = 0;
let f2:number = 1;
let fibonacciResult: number = 0;

if (number5 > 2){
    for (let i = 1 ; i < number5 ; i++){
        fibonacciResult = f1 + f2;
        f1 = f2;
        f2 = fibonacciResult;
        console.log(fibonacciResult);
    } 
} else if (number5 <= 1){
    f2 = number5;
} else if (number5 === 2){
    f2 = 1;
}
console.log(`The ${number5}th Fibonacci Number is ${f2}`);
