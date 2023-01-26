const nom= document.getElementById('name');
const prenom= document.getElementById('prenom');
const ville= document.getElementById('ville');
const pays= document.getElementById('pays');
const enfant= document.getElementById('ndenfant');
const adult= document.getElementById('ndadult');
const valeur= document.getElementById('valeur');
const cart= document.getElementById('cart');
const mois= document.getElementById('mois');
const année= document.getElementById('année');
const mdp= document.getElementById('mdp');
const ndenfant1= document.getElementById('ndenfant1');
const ndadult1= document.getElementById('ndadult1');

nom.addEventListener('input',functionNom);
function functionNom(){
    if(nom.value.length ==0){
        nom.style.border="2px solid red";
    }
    else if (nom.value.length < 3) {
        nom.style.border="2px solid #FAD40E";
    } else {
        nom.style.border="3px solid #1be11b";
    }
}
prenom.addEventListener('input',functionPrenom);
function functionPrenom(){
    if(prenom.value.length ==0){
        prenom.style.border="2px solid red";
    }
    else if (prenom.value.length < 3) {
        prenom.style.border="2px solid #FAD40E";
    } else {
        prenom.style.border="3px solid #1be11b";
    }
}

// nombre d'enfant.
enfant.addEventListener('input', FunctionEnfant);
function FunctionEnfant(){
    let Error= document.getElementById("sampError");
    if(enfant.value== 0){
        enfant.style.border="2px solid red";
        Error.style.display="inline";
    }
    // verifier si la valeur est numerique
    else if(isNaN(enfant.value)){
        enfant.style.border="2px solid red";
        Error.style.display="inline";
        enfant.style.disabled="disabled";
    }else{
        enfant.style.border=" 2px solid #1be11b";
        Error.style.display="none";
        
        // activer la boutton "+"
         ndenfant1.addEventListener('click',addEfant);
            var m= Number(enfant.value);
            function addEfant(){
                var n= m+ 1; 
                m++;
                enfant.value = n;
 }

    }
}

// nombre d'adulte
adult.addEventListener('input', FunctionAdult);
function FunctionAdult(){
    let Error= document.getElementById("sampError");
    if(adult.value== 0){
        adult.style.border="2px solid red";
        Error.style.display="inline";
    }
    // verifier si la valeur est numerique
    else if(isNaN(adult.value)){
        adult.style.border="2px solid red";
        Error.style.display="inline";
    }else{
        adult.style.border=" 2px solid #1be11b";
        Error.style.display="none";

        // activer la boutton "+"
         ndadult1.addEventListener('click',addadult);
            var m= Number(adult.value);
            function addadult(){
                var n= m+ 1; 
                m++;
                adult.value = n;
 }

    }
}