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
    console.log(`${number} x ${i}`)
}

//2. Write a code to check whether a string is a palindrome or not
//   Example : 'madam' -> palindrome

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

const numberIDR: number = 10000000;
let convertToString = numberIDR.toString();
console.log(convertToString);

convertToString = convertToString.replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1.");
console.log(convertToString)

convertToString = convertToString.replace(/\B(?=(\d{3})+(?!\d))/g,".");
console.log(convertToString)

console.log(`Rp ${numberIDR.toLocaleString()},00`)

//5. Write a code to remove the first occurrence of a given "search string" from a string
//   Example : string = "Hello world", search string = "ell" -> "Ho world"

const stringFormat: string = "Hello world";
const searchString: string = "ell";
let replaceResult:string = stringFormat.replace(searchString,"");

if (replaceResult === stringFormat){
    console.log("Unable to remove the string that you're looking for");
} else {
    console.log(replaceResult);
}

//6. Write a code to capitalize the first letter of each word in a string
//   Example : "hello world" -> "Hello World"

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
