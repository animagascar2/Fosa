const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");

let Page1 = document.getElementById("ct3");
let Page2 = document.getElementById("ct4");
let Page3 = document.getElementById("ct5");
let Page4 = document.getElementById("ct6");


btn1.addEventListener('click', affichePage1)
function affichePage1(){
    Page1.style.display="block";
    btn1.style.background='#159F15';
    btn1.style.color="white";

    Page2.style.display="none";
    Page3.style.display="none";
    Page4.style.display="none";
    btn2.style.background="transparent";
    btn2.style.color="#3D3E48";
    btn3.style.background="transparent";
    btn3.style.color="#3D3E48";
    btn4.style.background="transparent";
    btn4.style.color="#3D3E48";
}
btn2.addEventListener('click', affichePage2)
function affichePage2(){
    Page2.style.display="block";
    btn2.style.background='#159F15';
    btn2.style.color="white";
    
    Page1.style.display="none";
    Page3.style.display="none";
    Page4.style.display="none";
    btn1.style.background="transparent";
    btn1.style.color="#3D3E48";
    btn3.style.background="transparent";
    btn3.style.color="#3D3E48";
    btn4.style.background="transparent";
    btn4.style.color="#3D3E48";
}
btn3.addEventListener('click', affichePage3)
function affichePage3(){
    Page3.style.display="block";
    btn3.style.background='#159F15';
    btn3.style.color="white";
    
    Page1.style.display="none";
    Page2.style.display="none";
    Page4.style.display="none";
    btn1.style.background="transparent";
    btn1.style.color="#3D3E48";
    btn4.style.background="transparent";
    btn4.style.color="#3D3E48";
    btn2.style.background="transparent";
    btn2.style.color="#3D3E48";
}
btn4.addEventListener('click', affichePage4)
function affichePage4(){
    Page4.style.display="block";
    btn4.style.background='#159F15';
    btn4.style.color="white";
    
    Page1.style.display="none";
    Page2.style.display="none";
    Page3.style.display="none";
    btn1.style.background="transparent";
    btn1.style.color="#3D3E48";
    btn3.style.background="transparent";
    btn3.style.color="#3D3E48";
    btn2.style.background="transparent";
    btn2.style.color="#3D3E48";
}