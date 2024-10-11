const photo = document.getElementById("photo");
const next = document.getElementById("next");
const back = document.getElementById("back");


let count =  0

const photos = ["./image1.png","./image2.png","./image3.png"]

next.addEventListener("click",function(){
    count ++
    if(count >= photos.length){
        count = 0
    }
    photo.src = photos[count];
})

back.addEventListener("click",function(){
    count --
    if(count < 0){
        count = photos.length - 1
    }
    photo.src = photos[count]
})