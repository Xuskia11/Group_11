// 1) Write a function that takes an array of numbers as input and returns the sum of all the numbers in the array. Use a for...of loop to iterate through the array.
// 2) Write a function that takes an array of strings as input and returns the longest word in the array. Use a for...of loop to iterate through the array.
// 3) Write a function that takes an object as input and returns the count of its properties. Use a for...in loop to iterate through the object's properties.
// 4) Write a function that takes an object as input and returns an array containing all the keys of the object. Use a for...in loop to iterate through the object's properties and push each key into an array.
// 5) Using comments, explain what the scope is. Then write about let, const and var scopes.
// 6) Using comments, explain what the hoisting is.


// 1

// function sumAll(element){
//     let sum = 0;
//     for (let i = 0;i < element.length;i ++){
//         sum += element[i]
//     }
//     return sum
// }

// console.log(sumAll([1,2,3,4,5]))


// 2

// function longest(element){
//     element = element.split(" ")
//     let str = "";
//     for (let i = 0;i < element.length;i++){
//         if (element[i].length > str.length){
//             str = element[i]
//         }
//     }
//     return str 
// }

// console.log(longest("my name is xelvachauri"))


// 3

// function countObj(element){
//     let count = 0;

//     for (let i in element){
//         if(element.hasOwnProperty(i)){
//             count ++
//         }
//     }
//     return count
// }

// console.log(countObj({
//     name: "Alice",
//     age: 30,
//     job: "Engineer"
// }))


// 4

// function pushObj(element){
//     let lists = [];
//     for (let i of Object.keys(element)){
//         lists.push(i)
//     }
//     return lists
// }

// console.log(pushObj({name: "Alice",age: 30,job: "Engineer"}))


// 1

// const mult = (a) => a * a

// console.log(mult(7))


// 2

// const lists = arr =>  arr.filter(num => num % 2)

// console.log(lists([1,23,4,5]))


// 3

// const sumAll = (element) => {
//     let count = 0;
//     for (let i of element){
//         count += i
//     }
//     return count 
// }

// console.log(sumAll([1,2,3,45]))


// 5

// const palidrome = (Element) => {
//     if (Element == Element.split("").reverse().join("")){
//         return true
//     } else {
//         return false
//     }
// }

// console.log(palidrome("level"))


// 6


const btn = document.getElementById("btn");
const p = document.getElementById("p");

let count = 0

btn.addEventListener("click",() => {
    count ++
    p.textContent = count
})