// const person1 = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue"
//   };

// const perso1Add = {
//     position: "st"
// }

// console.log(Object.assign(person1, perso1Add))




// const person1 = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue"
//   };

// const perso1Add = {
//     position: "st"
// }

// console.log(Object.assign(person1, perso1Add))



// const person1 = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue"
//   };

// const perso1Add = {
//     position: "st"
// }
// const perso2Add = {
//     position: "lw"
// }
// const perso3Add = {
//     position: "rw"
// }

// Object.assign(person1, perso1Add,perso2Add,perso3Add)

// console.log(person1)


// const person1 = {
//         firstName: "John",
//         lastName: "Doe",
//         age: 50,
//         eyeColor: "blue"
//       };

// const person2 = {}

// console.log(Object.assign(person1,person2))



// const person1 = {
//         firstName: "John",
//         lastName: "Doe",
//         age: 50,
//         eyeColor: "blue"
//       };

// const person2 = {
//         firstName: "John",
//         lastName: "Doe",
//         age: 51,
//         eyeColor: "blue"
//       };

// console.log(Object.assign(person1,person2))



// function manualAssign(target, ...sources) {
//     for (const source of sources) {
//         for (const key in source) {
//             if (source.hasOwnProperty(key)) {
//                 target[key] = source[key];
//             }
//         }
//     }
//     return target;
// }


// destrucitons

// 1

// swap the values of 2 variables

let num = "a";
let num1 = "b";

[num,num1] = [num1,num];
console.log(num);
console.log(num1);

// 2

// swap 2 elements in an array

let numbers = [1,2,3,4,5];

[numbers[0],numbers[4]] = [numbers[4],numbers[0]];
console.log(numbers)

// 3

// assign array elements in variable

let numbers1 = [1,2,3,4,5];

const [firstNumber,secondNumber,thirdNumber,...rest] = numbers1

console.log(firstNumber);
console.log(secondNumber);
console.log(thirdNumber);
console.log(rest);

// 4

// Extract Values from objects

const person1 = {
        firstName: "John",
        lastName: "Doe",
        age: 50,
        eyeColor: "blue"
      };

const person2 = {
        firstName: "gela",
        lastName: "barkalaia",
        age: 55,
        eyeColor: "yellow"
      };


// const [firstname,lastname,age,eyeColor] = person1
const {firstName,lastName,age,eyeColor} = person2

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(eyeColor);


// desrtucture in function parametres

function displayPerson({firstname,lastname,age,eyeColor}){
    console.log(`name: ${firstname}`);
    console.log(`Lastname: ${lastname}`);
    console.log(`Age: ${age}`);
    console.log(`Eye Color: ${eyeColor}`);
}


const person3 = {
    firstname: "gela",
    lastname: "barkalaia",
    age: 55,
    eyeColor: "yellow"
  };

displayPerson(person3)