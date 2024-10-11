// const promiseGreet = new Promise((resolve) => resolve("Hello world"));

// promiseGreet.then((value) => {console.log(value)})



// const promiseDelay = new Promise(resolve => {resolve("Timed out")})

// console.log("Timed out in 3 seconds!!!")

// setTimeout(() => {
//     promiseDelay.then((value) => {console.log(value)})
// },1500)


// const firstPromise = new Promise((resolve) => {resolve("First")});

// const secondPromise = firstPromise.then((value) => {console.log(value + " -> second")})



// const promise1 = new Promise((resolve) => { resolve("text") });
// const promise2 = promise1.then((value) => { return value + " " + "on the"; });
// const promise3 = promise2.then((value) => { return value + " " + "trigger"; });
// const finish = promise3.then((value) => { console.log(value); });




// const timePromise = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         reject("Got rejected")
//     },1500)
// })

// timePromise.catch((value) => {console.log(value)})


// function time(){
//     setTimeout(() => {console.log(1)},1000);
//     setTimeout(() => {console.log(2)},1000);
//     setTimeout(() => {console.log(3)},1000);
// }

// time()


// const newPromise = new Promise(resolve => {setTimeout(() => resolve("Hello world"),2000)})

// newPromise.then(value => console.log(value))




// const promise1 = new Promise((resolve,reject) => {
//     let num = 2
//     if (num == 2){
//         setTimeout(() => {
//             resolve("This number is 2")
//         },2000)
        
//     } else {
//         setTimeout(() => {
//             reject("This number is not 2")
//         },2000)
//     }
// })


// promise1
//     .then((resolve) => console.log(resolve))
//     .catch((reject) => console.log(reject))



// const promise1 = () => {
//     let number = 3
//     return new Promise((resolve,reject) => {
//         if(number == 3){
//             resolve("You succesfully logged in")
//         } else {
//             reject("You cant join")
//         }
//     })
// }

// console.log(promise1())


// const promise = new Promise(resolve => resolve("Hello world"))

// promise.then(value => console.log(value))