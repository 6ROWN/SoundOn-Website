var menu = document.querySelector(".main-menu");
var menuBtn = document.querySelector(".menu-btn");
var cancelBtn = document.querySelector(".cancel-btn");

menuBtn.addEventListener("click", function(e){
    menu.classList.add("active");
    menuBtn.classList.add("hide")

})

cancelBtn.addEventListener("click", function(e){
    menu.classList.remove("active")
    menuBtn.classList.remove("hide")
})
