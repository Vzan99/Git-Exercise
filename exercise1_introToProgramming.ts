// Exercise 1 - Intro to programming, variables, and data types

//1. Write a code to find area of rectangle
//Example : length = 5, width = 3
//Output : 15

const _length:number = 5;
const _width:number = 3;

let areaRect:number = _length * _width;
console.log(areaRect);


//2. Write a code to find perimeter of rectangle.
//Example: length = 5, width = 3
// Output : 16

let perimeter:number = 2* (_length + _width);
console.log(perimeter);

//3. Write a code to find diameter, circumference and area of a circle
//Example : radius =5
//Output : diameter = 10, circumference = 31.4159, area = 78.539

const radius:number = 5;

let diameterCircle:number = radius * 2;
console.log(diameterCircle);

let circumferenceCircle:number = 2 * Math.PI * radius;
console.log(circumferenceCircle);

let areaCircle:number = Math.PI * Math.pow(radius,2);
console.log(areaCircle);

//4. Write a code to find angels of triangle if two angles are given.
//Example : a = 80, b = 65
//Output : 35

let a:number = 80;
let b:number = 65;
let angles = 180 - a - b;
console.log(angles);

//5. Write a code to convert days to years, months and days
//Notes: 1 year : 365 days, 1 month : 30 days
//Example: 400 days -> 1 year, 1 month, 5 days
//Example: 366 days -> 1 year, 0 month, 1 day

let dayInput:number = 400;

let year:number = Math.floor(dayInput / 365);
let month:number = Math.floor((dayInput % 365) / 30);
let day:number = Math.floor(dayInput % 365) % 30;

console.log(`${year} year, ${month} month, ${day} day`)

//6. Write a code to get difference between dates in days
//Example: date1 = 2022-01-20, date2 = 2022-01-22
//Output: 2

let date1: Date = new Date ("2022-01-20");
let date2: Date = new Date ("2022-01-22");

const timeDiff = Math.abs(date2.getTime() - date1.getTime());

const dayDiff = timeDiff / (1000 * 60 * 60 * 24);
console.log(dayDiff);
