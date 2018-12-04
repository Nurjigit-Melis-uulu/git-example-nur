let buttonLang = document.querySelector('#nav-1');
let buttonEdu = document.querySelector('#nav-2');
let buttonExp = document.querySelector('#nav-3');
let buttonSoft = document.querySelector('#nav-4');
let buttonNet = document.querySelector('#nav-5');
let buttonSki = document.querySelector('#nav-6');
let buttonSum = document.querySelector('#nav-7');
let buttonObj = document.querySelector('#nav-8');
let divBoxLang = document.querySelector('.box-lang');
let divBoxEdu = document.querySelector('.box-edu');

let divBoxExp = document.querySelector('.box-exp');

let divBoxSoft = document.querySelector('.box-soft');

let divBoxNet = document.querySelector('.box-net-skills');

let divBoxSkills = document.querySelector('.box-skills');
let divBoxSummary = document.querySelector('.box-summary');

let divBoxObj= document.querySelector('.box-obj');



buttonLang.addEventListener('click', function() {
    divBoxLang.className = "a-1"; 
});

buttonEdu.addEventListener('click', function() {
    divBoxEdu.className = "a-2"; 
 });

buttonExp.addEventListener('click', function() {
    divBoxExp.className = "a-3"; 
});

buttonSoft.addEventListener('click', function() {
    divBoxSoft.className = "a-4"; 
});

buttonNet.addEventListener('click', function() {
    divBoxNet.className = "a-5"; 
});

buttonSki.addEventListener('click', function() {
    divBoxSkills.className = "a-6"; 
});

buttonSum.addEventListener('click', function() {
    divBoxSummary.className = "a-7"; 
});

buttonObj.addEventListener('click', function() {      divBoxObj.className = "a-8"; 
});