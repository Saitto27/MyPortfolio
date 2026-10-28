window.addEventListener("load", () => {
document.getElementById("loader").style.display = "none";
});

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

reveals.forEach((element)=>{

const top = element.getBoundingClientRect().top;

if(top < window.innerHeight - 150){
element.classList.add("active");
}

});
});

const currentPage =
window.location.pathname.split("/").pop();

document.querySelectorAll(".navbar-nav .nav-link")
.forEach(link => {

    const href = link.getAttribute("href");

    if (href === currentPage) {
        link.classList.add("active");
    } else {
        link.classList.remove("active");
    }

});

const button = document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

if(window.scrollY > 300){
button.style.display="block";
}else{
button.style.display="none";
}

});

if(button){

button.addEventListener("click",()=>{

window.scrollTo({
top:0,
behavior:"smooth"
});

});

}

const themeToggle =
document.getElementById("theme-toggle");

if(themeToggle){

themeToggle.addEventListener("click",()=>{

document.body.classList.toggle("dark-mode");

});

}

const form =
document.getElementById("contactForm");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

document.getElementById("formMessage").innerHTML =
'<div class="alert alert-success mt-3">Message sent successfully!</div>';

});

}