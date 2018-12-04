let buttonLang = document.querySelector('#nav-1');
let buttonEdu = document.querySelector('#nav-2');
let buttonExp = document.querySelector('#nav-3');
let buttonSoft = document.querySelector('#nav-4');
let buttonNet = document.querySelector('#nav-5');
let buttonSki = document.querySelector('#nav-6');
let buttonSum = document.querySelector('#nav-7');
let buttonObj = document.querySelector('#nav-8');
let boxCorusel = document.querySelector('.corusel');

buttonLang.addEventListener('click', function() {
    boxCorusel.className = "a-1"; 
});

buttonEdu.addEventListener('click', function() {
    boxCorusel.className = "a-2"; 
 });

buttonExp.addEventListener('click', function() {
    boxCorusel.className = "a-3"; 
});

buttonSoft.addEventListener('click', function() {
    boxCorusel.className = "a-4"; 
});

buttonNet.addEventListener('click', function() {
    boxCorusel.className = "a-5"; 
});

buttonSki.addEventListener('click', function() {
    boxCorusel.className = "a-6"; 
});

buttonSum.addEventListener('click', function() {
    boxCorusel.className = "a-7"; 
});

buttonObj.addEventListener('click', function() {      boxCorusel.className = "a-8"; 
});