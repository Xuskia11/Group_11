// 1
// const peopleArr = ["Atuka_15","Data_16","Erekle_13"];

// const TranformArr = peopleArr.map(Tranform)

// console.log(TranformArr)

// function Tranform(elements){
//     elements = elements.split("_")
//     return `name: ${elements[0]}`
// }


// 2



// function isPrime(elements){
//     if (elements <= 2){
//         return false
//     } else if (elements === 0){
//         return true
//     } else if (elements % 2 === 0){
//         return false
//     }

//     for(let i = 3;i <= Math.sqrt(elements);i+= 2){
//         if(elements % i === 0){
//             return false
//         } else {
//             return true
//         }
//     }
// }

// const numbersArr = [11,2,6,1,77,34,24]

// const checkIsPrime = numbersArr.map(isPrime);

// console.log(checkIsPrime)



// 3

// function checkStudents(element){
//     element = element.split("_");
//     return Number(element[1]) >= 70
// }

// const studentsArr = ["james_30","michecle_70","Lana_100","Nikola_10"] 

// const gradesFilter = studentsArr.filter(checkStudents);
// console.log(gradesFilter)


// 4

// function checkFile(element){
//     element = element.split(".")
//     return element[1] === "jpg"

// }

// const fileArr = ["main.py","file.jpg","files.png"]

// const fileFilter = fileArr.filter(checkFile)

// console.log(fileFilter)



// 5


// function manualMap(subFunc, arr){
//     const newArr = [];

//     for (let i = 0; i < arr.length; i++){
//         newArr.push(subFunc(arr[i]))
//     }
//     return newArr
// }

// function addTwo(value){
//     return value + 2
// }

// const result = manualMap(addTwo, [1,2,3,4,5])

// console.log(result)

// 6

// function manualFilter(subFunc, numbers){
//     const newArr = [];

//     for (let i = 0; i < numbers.length; i++){
//         if (subFunc(numbers[i]) == true){
//             newArr.push(numbers[i])
//         }
//     }
//     return newArr
// }

// const numbers = [1, 2, 3, 4, 5];

// const result1 = manualFilter((value) => {
//     return value >= 3
// }, numbers)

// console.log(result1)