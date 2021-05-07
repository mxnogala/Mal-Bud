const navbar = document.querySelector(".nav");

const showNavbar = () => {

    if (window.pageYOffset > 150) {
        navbar.style.opacity = 0.98;
    }
    else {
        navbar.style.opacity = 0;
    }

}

document.addEventListener("scroll", showNavbar);

