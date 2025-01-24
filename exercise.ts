// Exercise
// 1. Write a code to display the multiplication table of a given integer/
//    Example : Number -> 9
//    Output  : 9 x 1
//              9 x 2
//              ...
//              9 x 10

let number :number = 9;

for (let i = 1 ; i <= 10 ; i++){
    console.log(`${number} x ${i}`);
}

//2. Write a code to check whether a string is a palindrome or not
//   Example : 'madam' -> palindrome

let text: string = 'madam';
let panjangText = text.length;
console.log(panjangText);

let nilaiHurufTengah: number = Math.ceil(panjangText/2);
console.log(nilaiHurufTengah);

let _sliceTengah = text.slice(nilaiHurufTengah+1);
console.log(_sliceTengah);

let _slicePiece
for (let i = 0 ; i <= panjangText/2 ; i++) {
    //console.log(text[i]);
    console.log(text[panjangText - 1 - i]);
}
