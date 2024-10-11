// const arr = [1,23,4,5,6]

// let count = 0

// arr.forEach(function(value){
//     count += value
// })

// console.log(count)


// function index(arr){
//     const newArr = [];
//     let count = 0;
//     arr.forEach(function(char){
//         newArr.push(char,count)
//         count ++
//     })

//     return newArr
// }

// console.log(index(["A","v","t","i","a"]))



function mult(previous, next){
    return previous * next
}

const arr = [32,4,135,13,4];
const multiplcation = arr.reduce(mult);

console.log(multiplcation)