const moneyInput = document.getElementById("money");
const euroIcon = document.getElementById("euroIcon");
const yearsInput = document.getElementById("yearsInput");
const secondInputDiv = document.getElementById("secondInputDiv");
const yearsIcon = document.getElementById("yearsIcon");
const rateInput = document.getElementById("rateInput");
const rateIcon = document.getElementById("rateIcon");
const rateDiv = document.getElementById("rateDiv");

const warning = document.getElementById("warning");

const radioDiv1 = document.getElementById("radioDiv1");
const radio1 = document.getElementById("repayment1");
const radioDiv2 = document.getElementById("radioDiv2");
const radio2 = document.getElementById("Interest-only1");


const btn = document.getElementById("btn");

const box2 = document.getElementById("box2");
const box2f = document.getElementById("box2f");


const result = document.getElementById("result");
const result2 = document.getElementById("result2")



btn.addEventListener("click",(e) => {
    e.preventDefault();
    if (moneyInput.value === "" || isNaN(moneyInput.value)){
        moneyInput.style.border = "1px solid red";
        euroIcon.style.backgroundColor = "red";
        euroIcon.style.color = "white";

    } else {
        moneyInput.style.border = "1px solid hsl(200, 24%, 40%)";
        euroIcon.style.backgroundColor = "hsl(202, 86%, 94%)";
        euroIcon.style.color = "hsl(200, 24%, 40%)";
    }
    if (yearsInput.value === "" || isNaN(yearsInput.value)) {
      secondInputDiv.style.border = "2px solid red"
      yearsIcon.style.backgroundColor = "red";
      yearsIcon.style.color = "white";
    } else {
        secondInputDiv.style.border = "1px solid hsl(200, 24%, 40%)";
        yearsIcon.style.backgroundColor = "hsl(202, 86%, 94%)";
        yearsIcon.style.color = "hsl(200, 24%, 40%)";
    }
    if (rateInput.value === "" || isNaN(rateInput.value)) {
      rateDiv.style.border = "2px solid red";
      rateIcon.style.backgroundColor = "red";
      rateIcon.style.color = "white";
    } else {
        rateDiv.style.border = "1px solid hsl(200, 24%, 40%)";
        rateIcon.style.backgroundColor = "hsl(202, 86%, 94%)";
        rateIcon.style.color = "hsl(200, 24%, 40%)";
    }
    if (!radio1.checked && !radio2.checked){
        
        warning.textContent = "This feald is requered"
    }

    let p = moneyInput.value;
    let r = rateInput.value / 100;
    let n = 12;
    let t = yearsInput.value;

    let calculation = (p * (r / n)) / (1 - (1 + r / n) ** (-n * t));
    console.log(calculation)

    if (moneyInput.value != "" && yearsInput.value != "" && rateInput.value != "" ){
        box2.style.display = "none";
        box2f.style.display = "block";
        box2f.style.display = "flex"
        box2f.style.gap = "25px"
    }

    result.textContent = `£${calculation}`.slice(0,6);
    result2.textContent = `£${calculation * (t * n)}`.slice(0,10);
})
radio1.addEventListener("click", function () {
  radioDiv1.style.border = "1px solid hsl(61, 70%, 52%)";
  radioDiv2.style.backgroundColor = "hsl(61, 70%, 52%, 0.1)";
  radioDiv2.style.border = "1px solid hsl(200, 24%, 40%)";
  radioDiv2.style.backgroundColor = "white";
});