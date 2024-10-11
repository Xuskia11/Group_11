const child = document.getElementById("child")



let positionX = 0;
let positionY = 0;

document.addEventListener("keydown",event => {
    if(event.key == "ArrowLeft"){
        const moveLeft = setInterval(function(){
            positionX --;
            child.style.left = positionX + "px";
            if(positionX == 0){
                clearInterval(moveLeft)
            }

        },10)
    } else if(event.key == "ArrowRight"){
        const moveRight = setInterval(function(){
            positionX ++
            child.style.left = positionX + "px";
            if(positionX == 150){
                clearInterval(moveRight)
            }
        },10)
    } else if(event.key == "ArrowDown"){
        const moveDown = setInterval(function(){
            positionY ++;
            child.style.top = positionY + "px";
            if(positionY == 150){
                clearInterval(moveDown)
            }
        },10)
    } else if(event.key == "ArrowUp"){
        const moveUp = setInterval(function(){
            positionY --;
            child.style.top = positionY + "px";
            if(positionY == 0){
                clearInterval(moveUp)
            }
        },10)
    }
})
