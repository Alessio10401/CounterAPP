const div1 = document.createElement("div");
const buttomincrease = document.createElement("button");
const buttomdecrease = document.createElement("button");
const buttomreset = document.createElement("button");
let counter = document.createElement("p");

document.body.appendChild(counter);
document.body.appendChild(div1);
document.body.appendChild(buttomreset);

// add button inner div
div1.appendChild(counter);
div1.appendChild(buttomincrease);
div1.appendChild(buttomdecrease);
// add button content
counter.textContent = 0;
buttomincrease.textContent = "+";
buttomdecrease.textContent = "-";
buttomreset.textContent = "Reset";
// add class 
div1.classList.add("counter");
buttomreset.classList.add("reset");

//function change value
function increase (){
    counter.textContent = parseInt(counter.textContent) + 1;
}
function decrease (){
    if (counter.textContent == 0){
    counter.textContent = parseInt(counter.textContent) ;}
    else{
        counter.textContent = parseInt(counter.textContent) - 1;
    }
}
function reset(){
    counter.textContent = 0;
}
//Event
buttomincrease.addEventListener("click",()=>{
    increase();
})
buttomdecrease.addEventListener("click",()=>{
    decrease();
})
buttomreset.addEventListener("click",()=>{
    reset();
})