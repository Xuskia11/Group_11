const photo = document.getElementById("photo");
const next = document.getElementById("next");
const back = document.getElementById("back");

images = ["./image1.png","./image2.png","./image3.png"]

let count = 0

next.addEventListener("click",() => {
    count ++
    if(count >= images.length){
        count = 0
    }
    photo.src = images[count]
})

back.addEventListener("click",() => {
    count --
    if(count < 0){
        count = images.length - 1
    }
    photo.src = images[count]
})