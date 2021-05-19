let match = window.matchMedia("(min-width:768px)");
const shopBtn = document.querySelector(".shop__btn");
const shopContent = document.querySelector("#shopContent");


const matchWindowSize = () => {

    if (match.matches) {
        shopContent.classList.add("show");
    }
    else {
        if (shopContent.classList.contains("show")) {
            shopContent.classList.remove("show");
        }
    }

}

matchWindowSize();
match.addEventListener("change", matchWindowSize);
