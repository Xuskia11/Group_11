const form = document.getElementById("my-form");
const result = document.getElementById("result");
const Base = []


form.addEventListener("submit",function(e){
    e.preventDefault()
    const usernameValue = form.elements.name.value
    const passwordValue = form.elements.password.value


    Base.push(usernameValue);
    Base.push(passwordValue);

    

    console.log(Base)
})


const login = document.getElementById("login");

login.addEventListener("submit",function(e){
    e.preventDefault()


    const loginUserValue = login.elements.name2.value;
    const loginPassowordValue = login.elements.password2.value;

    console.log(loginUserValue)

    if(loginUserValue == Base[0] && loginPassowordValue == Base[1]){
        location.href = "new.html"
    } else {
        const childNode = document.createTextNode("This account does not exist");
        result.appendChild(childNode)
    }
})