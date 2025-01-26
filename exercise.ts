
// Name     : Prasetyo Aji Nugroho
// Program  : JCWDOL-18

// Exercise
// 1. Write a code to display the multiplication table of a given integer/
//    Example : Number -> 9
//    Output  : 9 x 1
//              9 x 2
//              ...
//              9 x 10

let number :number = 9;
let numberResult= 0;

for (let i = 1 ; i <= 10 ; i++){
    console.log(`${number} x ${i} = ${number * i}`)
}

// 2. Write a code to check whether a string is a palindrome or not
//    Example : 'madam' -> palindrome

const text: string = 'madam';
let panjangText = text.length;
let palindromeCheck:boolean = true;

for (let i = 0 ; i < panjangText / 2 ; i++){
    if (text.slice(i, i + 1) !== text.slice(panjangText -i - 1, panjangText - i)){
        palindromeCheck = false;
        break;
    }
}

if (palindromeCheck === false){
    console.log(`${text} is not a palindrome text`);
} else { 
    console.log(`${text} is a palindrome text`)
}

// 3. Write a code to convert centimeter to kilometer
//    Example: 100000 -> "1km"

const centiMeter:number = 100000;
const kilometer: number = Math.ceil(centiMeter / Math.pow(10,5));

console.log(`${centiMeter} centimeter is ${kilometer} km`);


// 4. Write a code to format number as currency (IDR)
//    Example : 1000 -> "Rp. 1.000,00"

const numberIDR: number = 100000;
let convertToString = numberIDR.toString();
let pjgString = convertToString.length;
let price = "";
let j = 0;

for (let i = 0 ; i < pjgString ; i++) {
    price = convertToString.slice(pjgString-1-i,pjgString-i) + price;
    console.log(i)
    console.log(price)
    j++;
    if (j === 3 && i !== pjgString - 1) {
        price = "." + price;
        console.log(price);
        j = 0;
    }
}
console.log(`Rp. ${price},00`);

// 5. Write a code to remove the first occurrence of a given "search string" from a string
//    Example : string = "Hello world", search string = "ell" -> "Ho world"

const stringFormat: string = "Hello world";
const searchString: string = "ell";
let replaceResult:string = stringFormat.replace(searchString,"");

if (replaceResult === stringFormat){
    console.log("Unable to remove the string that you're looking for");
} else {
    console.log(replaceResult);
}

// 6. Write a code to capitalize the first letter of each word in a string
//    Example : "hello world" -> "Hello World"

let text6: string = "hello world";
let textCapital:string ="";
let afterSpace:boolean = true;
let slice6:string = "";

for (let i = 0 ; i < text6.length ; i++) {
    slice6 = text6.slice(i, i+1);
    console.log(slice6);
    if (slice6 !== " " && afterSpace){
        textCapital += slice6.toUpperCase();
        console.log(textCapital)
        afterSpace = false;
    } else {
        textCapital += slice6;
        console.log(textCapital);
    }

    if (slice6 === " ") {
        afterSpace = true;
    }
}
console.log(textCapital);

// 7. Write a code to swap the case of each character from string
//    Example: 'The QuiCk BrOwN Fox' -> tHE qUIcK bRoWn fOX'

let text7:string = "The QuiCk BrOwN Fox";
let textResult = "";

for (let i = 0 ; i < text7.length ; i++){
    let huruf7 = text7.slice(i, i + 1);
    console.log(huruf7)
    if (huruf7.toUpperCase() === text7.slice(i, i + 1)){
        textResult += huruf7.toLowerCase();
        console.log(huruf7.toLowerCase());
    } else if (huruf7.toLowerCase() === text7.slice(i, i + 1)){
        textResult += huruf7.toUpperCase()
        console.log(huruf7.toUpperCase())
    }
}

console.log(textResult);


// 8. Write a code to find the largest of two given integers
//    Example : num1 = 42, num2 = 27 -> 42;

const num1:number = 42;
const num2:number = 27;

if (num1 > num2) {
    console.log(num1);
} else if (num1 < num2) {
    console.log(num2);
} else if (num1 === num2) {
    console.log("both numbers are equal")
} else {
    console.log("wrong input number")
}

// 9. Write a conditional statement to sort three numbers
//    Example : num1 = 42, num2 = 27, num3 = 18 -> 18, 27,42

const no1:number = 42;
const no2:number = 27;
const no3:number = 18;

let smallest:number = 0;
let middle:number = 0;
let largest: number = 0;

if (no1 > no2 && no1 > no3){
    largest = no1;
    if (no2 > no3) {
        smallest = no3;
        middle = no2;
    } else {
        smallest = no2;
        middle = no3;
    }
} else if (no2 > no1 && no2 > no3) {
    largest = no2;
    if (no1 > no3) {
        smallest = no3;
        middle = no1;
    } else { 
        smallest = no1;
        middle = no3;
    }
} else if (no3 > no1 && no3 > no2) {
    largest = no3;
    if (no1 > no2) {
        smallest = no2;
        middle = no1;
    } else {
        smallest = no1;
        middle = no2;
    }
}

console.log(smallest,middle,largest)

// 10. Write a code that shows 1 if the input is a string, 
//     2 if the input is a number, and 3 for others data type
//     Example ; "hello" -> 1

let dataInput = 12;

if (typeof dataInput === "string") {
    console.log(1);
} else if (typeof dataInput === "number") {
    console.log(2);
} else {
    console.log(3);
}


// 11. Write a code to change every letter a into * from a string of input
//     Example : 'An apple a day keeps the doctor away' -> '*n *pple d*y keeps the doctor *w*y'

let stringChange = "an apple a day keeps the doctor away";
let wordConvert= "";

for (let i = 0 ; i < stringChange.length ; i++) {
    stringChange = stringChange.replace("a","*");
    wordConvert += stringChange.slice(i, i + 1);
}
console.log(wordConvert);
