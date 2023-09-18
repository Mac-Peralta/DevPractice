const x = "test";
const buttonOne = document.querySelector('#b1');
const reveal = document.querySelector('#yaki');
var buttonTwo = document.querySelector('#b2');
function ifYes(){
    let ye = document.getElementById("h");
    ye.innerHTML = "Hello";
    ye.style.color = 'red';
}
function revealingArea() {
    let x = document.getElementById('sova');
    x.style.color = 'red';
    if(reveal.classList.contains('yaki')){
        reveal.classList.remove('yaki');
    }
    else{
        reveal.classList.add('yaki');
    }
}
 function ifNo(){
    document.getElementById("h").innerHTML = "World";
 }

 buttonOne.addEventListener("click", ifYes);
 buttonTwo.addEventListener("click", ifNo);
 reveal.addEventListener("click", revealingArea);