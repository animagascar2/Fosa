const show = document.getElementById('show');
const hide = document.getElementById('hide');

function ShowFunction(){
    let lg8 = document.getElementById('lg8');
    lg8.style.display="inline";
    hide.style.display="block";
    show.style.display="none";
}
function hideFunction(){
    let lg8 = document.getElementById('lg8');
    lg8.style.display="none";
    hide.style.display="none";
    show.style.display="block";
}
show.addEventListener('click', ShowFunction);
hide.addEventListener('click',hideFunction);