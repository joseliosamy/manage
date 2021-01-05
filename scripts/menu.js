

const menu = document.querySelector('.mobile nav');
const hamburguer = document.querySelector('#hamburguer');
const closeHamburguer = document.querySelector('#close-menu');
const backdrop = document.querySelector('#backdrop');


hamburguer.addEventListener('click', () =>{
    if(menu.getAttribute('class') == "dropOut"){
        hamburguer.setAttribute('src', 'images/icon-close.svg');
        backdrop.setAttribute('style','display:flex');
        menu.classList.remove("dropOut");
        menu.classList.add("dropIn");
    }else{
        hamburguer.setAttribute('src', 'images/icon-hamburger.svg');
        backdrop.setAttribute('style','display:none');
        menu.classList.remove("dropIn");
        menu.classList.add("dropOut");   
    }
})


