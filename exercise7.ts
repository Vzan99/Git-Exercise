// Exercise 7 
// Prasetyo Aji N - JCWDOL 018

// 1. Create a function to check if two objects are equal
// Example
//      Input : {a:2} & {a:1}
//      Output: false
// Example
//      Input : {a:"Hello"} & {a:1}
//      Output: false
// Example
//      Input : {a:1} & {a:1}
//      Output: true

interface IObjects {
    a:number;
}

class Objects implements IObjects {
    a: number;
}


const object1 = new Objects();
object1.a = 1;
const object2 = new Objects();
object2.a = 1;

function checkTwoObjects (input1: Objects, input2: Objects){
    if (input1.a === input2.a) {  
        return true
    } else {
        return false
    }
}

console.log(checkTwoObjects(object1,object2));

// 2. Create a function to get the intersection of two objects
// Example
//      Input : { a: 1, b: 2} & { a: 1, c: 3}
//      Output: { a: 1}

interface IObjectAB {   // Interface
    a:number;   
}

class ObjectAB implements IObjectAB {   // Parent
    a:number;
}

class ObjectA extends ObjectAB {
    b:number;
}

class ObjectB extends ObjectAB {
    c:number;
}

const objA = new ObjectA();
objA.a = 1;
objA.b = 2;

const objB = new ObjectB();
objB.a = 1;
objB.c = 2;

function intersectionObj1(input1: ObjectAB, input2: ObjectAB) {
    let result = {};
    for (let key in objA) {
        if (objA[key] === objB[key]) {
            result[key] = objA[key] ; 
        } 
    }
    return result;
}

console.log(intersectionObj1(objA,objB));

// 3. Create a function to merge two array of student data and remove duplicate data
//    Student data : name & email
// Example :
/*  Array1->[
            {name: 'Student 1', email: 'student1@gmail.com'},
            {name: 'Student 2', email: 'student2@gmail.com'}
            ]
    Array2->[
            {name: 'Student 1', email: 'student1@gmail.com'},
            {name: 'Student 3', email: 'student3@gmail.com'}
            ]
    Result :
    ArrayResult->[
            {name: 'Student 1', email: 'student1@gmail.com'},
            {name: 'Student 2', email: 'student2@gmail.com'},
            {name: 'Student 3', email: 'student3@gmail.com'}
            ]
*/

interface IStudentData {
    nameAndEmail: {name:string, email:string} [];
}

class StudentData implements IStudentData {
    nameAndEmail: {name:string, email:string} [] = [];

    constructor (name:string, email:string) {
        this.nameAndEmail.push({name, email});
    }

    addMoreStudent (name:string, email:string) {
        this.nameAndEmail.push({name, email});
    }
}

function studentResult(student1: StudentData, student2: StudentData) {
    //menggabungkan 2 array yang berbeda, menjadi 1 array
    const mergedNameAndEmail = [...student1.nameAndEmail, ...student2.nameAndEmail];
    console.log(mergedNameAndEmail);
    console.log(mergedNameAndEmail.length);

    const uniqueStudents = new Map<string, { name: string; email: string }>();
    console.log(uniqueStudents)

    //for of loop di array yang sudah digabung
    for (const studentData of mergedNameAndEmail) {
        //buat key unik, lalu dipecah dan dipisahkan oleh spasi
        const uniqueKey = `${studentData.name} ${studentData.email}`;
        //menyimpan uniqueKey sebagai key dan value, lalu studentdata hanya distore sebagai value, dan dicek apa value yang sama berada dalam key yang sudah ada?
        uniqueStudents.set(uniqueKey, studentData);
        // console.log(uniqueStudents.set(uniqueKey, studentData))
    }

    return Array.from(uniqueStudents.values());
}

const student1 = new StudentData ("Student1", "student1@gmail.com");
student1.addMoreStudent("Student2", "student2@gmail.com");

const student2 = new StudentData ("Student1", "student1@gmail.com");
student2.addMoreStudent("Student3", "student3@gmail.com");

console.log(studentResult(student1,student2));

// 4. Create a function that accept input as an array of objects and switch all values into property and property into value
//      Example : 
//      Input: [{ name: 'David', age: 20}]
//      Output: [{ David: 'name', 20: 'age'}]

interface ISwitch {
    arrayOfObjects:{ name: string, age: number }[];
}

class Switch implements ISwitch{
    arrayOfObjects:{ name: string, age: number }[] = [];

    constructor(name: string, age:number){
    this.arrayOfObjects.push({ name,age })
    }

}

const input1 = new Switch("David", 20);
console.log(input1.arrayOfObjects);

function switching(arr: { name: string, age: number }[]) {
    return arr.map(obj => {
        let swapped: { [key: string]: string } = {};
        for (let key in obj) {
            console.log(key)
            console.log(obj[key])
            swapped[obj[key]] = key;
        }
        return swapped;
    });
}

console.log(switching(input1.arrayOfObjects));


// 5. Create a function to find a factorial number using recursion
// Example
//      Input: 5
//      Output 5! = 5 x 4 x 3 x 2 x 1 = 120

function recursionFactorial (num1:number) {
    let nextNumber: number = num1 - 1;
    if (nextNumber > 0) {
        console.log(num1)
        console.log(nextNumber)
        let result = num1* recursionFactorial(nextNumber);
        return result
    }
    return num1;
}

console.log(recursionFactorial(5))

// 6. Shooting Game
/* Spesifications : 
    - Create a shooting game between two player
    - Each player has three properties : name, health and power
    - Each player will take turns to shooting
    - Before shooting, players get a chance to get random items (health +10 or power +10)
    - The game will continue until one of the players has health < 0
   Requirements :
    - Create ShootingGame & Player class
    - ShootingGame class :
        - constructor(player1,player2)  -> player objects as a parameter
        - getRandomItem()               -> return { health; 0 or 10, power; 0 or 10 }
        - start()                       -> start shooting games
    - Player class :
        - Property                      -> name, health (default 100), power (default 10)
        - damage(power)                 -> subtract player health
        - useitem(item)                 -> apply item to player (increase health or power, based on result from getRandomItem())
        - showStatus()                  -> show player status (ex: "Player A(Health => 100, Power =>10")
    - ShootingGame start() function flow :
        - In every turn : 
            - Show each player status before shooting
            - Get random item for each player before shooting
            - Show each player status after shooting
        - Show winner name
*/

//--------------------------------------------
//    interface IPlayer and IShootingGame
//--------------------------------------------

interface IPlayer {
    name: string;
    health: number;
    power: number;
    damage(powerEnemy: number): void;
    useItem(item: { health: number; power: number }): void;
    showStatus(): void;
}

interface IShootingGame {
    player1: IPlayer;
    player2: IPlayer;
    getRandomItem(): { health:number, power:number };
    start(): void;
}

//--------------------------------------------
//               Class Player
//--------------------------------------------

class Player implements IPlayer{
    name: string;
    health: number = 100;
    power: number = 10;


    constructor (name:string){
        this.name = name;
    }

    damage(powerEnemy: number) {
        this.health -= powerEnemy;
    }

    useItem(item: {health: number, power: number}) {
        this.health += item.health;
        this.power += item.power; 
    }

    showStatus(){
        let status = (`${this.name}, (Health => ${this.health}, Power => ${this.power})`);
        return status;
    }
}

//--------------------------------------------
//             Class ShootingGame
//--------------------------------------------

class ShootingGame implements IShootingGame {
    player1: IPlayer;
    player2: IPlayer;

    constructor (player1: IPlayer, player2: IPlayer) {
        this.player1 = player1;
        this.player2 = player2;
    }

    getRandomItem() {
        const max = 10;
        const randomNumber = Math.floor(Math.random() * max);
        let resultItem = {health: 0, power: 0};
        if (randomNumber >= 0 && randomNumber <= 5) {      
            resultItem = {health: 0, power: 10};
        } else if (randomNumber > 5 && randomNumber <= 10) {
            resultItem = {health: 10, power:0};
        }
        return resultItem;
    }

    start(): void {
        let attacker = this.player1;
        let defender = this.player2;

        //before shooting (default Health and Power)
        console.log(attacker.showStatus());
        console.log(defender.showStatus());

        while (attacker.health > 0 && defender.health > 0) {
            
            //each player status before shooting
            console.log(attacker.showStatus());
            console.log(defender.showStatus());

            //using item
            let item = this.getRandomItem();
            attacker.useItem(item);
            
            //attacker attacks defender
            defender.damage(attacker.power);

            //aftershooting
            console.log(attacker.showStatus());
            console.log(defender.showStatus());

            //swap turns
            [attacker, defender] = [defender, attacker];
        }
        
        //swap back the "last attacker" so the one that have health always comes out as a winner
        [attacker, defender] = [defender, attacker];

        if (attacker.health > 0) {
            console.log(`The winner is ${attacker.name}`);
        } else {
            console.log(`The winner is ${defender.name}`);
        }
    }
}

//Make object player one and two
const playerONE = new Player ("Tom");
const playerTWO = new Player ("Jerry");

//Make object game from blue print ShootingGame class
const Game = new ShootingGame(playerONE,playerTWO);

//Start the game method
Game.start();




