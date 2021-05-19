const navBtn = document.querySelector(".nav__btn");
const nav = document.querySelector(".nav");
const navCollapse = document.querySelector(".nav__collapse");
const test = document.querySelector(".test");

navBtn.addEventListener("click", () => {
    navCollapse.classList.toggle("hide");
})