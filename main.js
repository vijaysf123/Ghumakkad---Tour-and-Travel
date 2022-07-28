const menu = document.getElementById("menu-bars");
const navbar = document.querySelector(".navbar");

menu.addEventListener("click",function(){
    menu.classList.toggle("fa-times")
    navbar.classList.toggle("nav-toggle");
    navbar.style.transition = "0.3s";
});

window.addEventListener("scroll", function(){
    menu.classList.remove("fa-times")
      navbar.classList.remove("nav-toggle")
});  


// let header = document.querySelector("header");

// if (window.scrollY > 30){
//     header.classList.add("header-active")
// }else{
//     header.classList.remove("header-active")
// }
