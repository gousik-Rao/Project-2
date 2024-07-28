let offerbar=document.querySelector(".offer-bar");
let closeicon=document.getElementById("offer-close-icon");
let sidenav=document.querySelector(".side-nav");
let menubar=document.getElementById("menubar");
let sidenavclose=document.getElementById("side-navbar-close");
let navbarlink=document.getElementById(".navbar-link")


function darkMode() {
    let element = document.body;
    let content = document.getElementById("DarkModetext");
    element.className = "dark-mode";
}
function lightMode() {
    let element = document.body;
    let content = document.getElementById("DarkModetext");
    element.className = "light-mode";
}

closeicon.addEventListener("click",function(){
    offerbar.style.display="none";
    
});

sidenav.style.right="-70%";

function togglenavbar(){
    if(window.innerWidth < 901){
        menubar.style.display="block";

    } else {
        sidenav.style.visibility="hidden";
        menubar.style.display="none";
    }
}

togglenavbar();

window.addEventListener("resize", togglenavbar);

menubar.addEventListener("click",function(){
    sidenav.style.right="0%";
    sidenav.style.visibility = "visible";
});
sidenavclose.addEventListener("click",function(){
    sidenav.style.right="-70%";
});
 

