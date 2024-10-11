const form = document.getElementById("my-form")
const parentDiv = document.getElementById("parent-div")



const addChild = function(text){
    const pNode = document.createElement("p")
    const textNode = document.createTextNode(text)


    pNode.appendChild(textNode)
    parentDiv.appendChild(pNode)

    pNode.addEventListener("click",function(){
        parentDiv.removeChild(pNode)
    })
}


form.addEventListener("submit",function(e){
    e.preventDefault();
    const input = form.elements.name;
    addChild(input.value);
    input.value = "";
})
