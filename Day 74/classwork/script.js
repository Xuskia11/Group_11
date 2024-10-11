const p = document.getElementById("p");
const btn = document.getElementById("btn");

let count = 0;

function Count(){
    count ++;
    p.textContent = count;
    if(count === 10){
        btn.removeEventListener("click",Count);
    }
}    

btn.addEventListener("click",Count);