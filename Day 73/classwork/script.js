


// let movement = 0
// let goRight = true

// const time = setInterval(function(){
//     if(goRight == true){
//         movement ++
//     } else {
//         movement --
//     }
//     child.style.left = movement + "px";

//     if(movement == 150){
//         goRight = false
//     } else if(movement == 0){
//         clearInterval(time)
//     }
    
// },30)


const child = document.getElementById("child")


positionX = 0;
positionY = 0;

const moveRight = setInterval(function(){
    if(positionX === 150){
        clearInterval(moveRight)
        const moveDown = setInterval(function(){
            if(positionY === 150){
                clearInterval(moveDown)
                const moveLeft = setInterval(function(){
                    if(positionX === 0){
                        clearInterval(moveLeft)
                        const moveUp = setInterval(function(){
                            if(positionY === 0){
                                clearInterval(moveUp)
                            }
                            child.style.top = positionY + "px";
                            positionY --
                        },10)
                    }
                    child.style.left = positionX + "px"
                    positionX --
                },10)
            }
            child.style.top = positionY + "px";
            positionY ++
        },10)
    }
    child.style.left = positionX + "px";
    positionX ++
},10)
    