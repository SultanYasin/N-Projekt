let menuOpen = false;
const menuButton = document.querySelector(".header-menu-button");
const menu = document.querySelector(".header-mobile-menu");
const links = document.getElementsByClassName("header-mobile-link");

function toggleMenu(){
    if(!menuOpen){
        menuButton.classList.add("open");
        menuOpen = true;
        menu.style.right = "0%";
    }else{
        menuButton.classList.remove("open");
        menuOpen = false;
        menu.style.right = "-100%";
    }
}

window.addEventListener("load", function(){
    menuButton.addEventListener("click", toggleMenu);
    for(let i = 0; i < links.length; i++){
        links[i].addEventListener("click", toggleMenu);
    }
});


















































