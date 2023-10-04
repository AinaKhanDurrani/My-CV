const mobile_nav =document.querySelector(".mobile-nav-btn");
const nav_header= document.querySelector(".header");

const toggle_navbar=()=>{
   nav_header.classList.toggle("active");
}

mobile_nav.addEventListener("click",() => toggle_navbar());