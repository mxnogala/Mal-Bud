const openImgs = [...document.querySelectorAll(".gallery-image")];
const modalContainer = document.querySelector("#modal-container");
const modalContent = document.querySelector(".modal__content");
const img = document.querySelector(".modal__img");
const right = document.querySelector("#right");
const left = document.querySelector("#left");
const modalImg = document.querySelector(".modal__img");
const close = document.querySelector("#close");
let currentImgId;
let currentImgSrc;

const getImage = (currentImg, i) => {
    let previousImg = currentImg.split("-");
    previousImg = parseInt(previousImg[1]) + parseInt(i);
    if (previousImg < 1 && i == -1) {
        previousImg = 9;
    }
    else if (previousImg > 9 && i == 1) {
        previousImg = 1;
    }
    previousImg = `#p-${previousImg}`;
    console.log(previousImg);
    let newImg = document.querySelector(previousImg);
    console.log(newImg);
    modalImg.src = newImg.src;
    currentImgId = newImg.id;
    currentImgSrc = newImg.src;

}

const openModal = (imgSrc) => {

    modalContainer.removeAttribute('class');
    modalContainer.classList.add("in");
    document.body.classList.add('modal-active');
    img.src = imgSrc;

    left.addEventListener("click", () => {
        getImage(currentImgId, -1);
    });

    right.addEventListener("click", () => {
        getImage(currentImgId, 1);
    })

}

const closeModal = () => {
    modalContainer.classList.add('out');
    document.body.classList.remove('modal-active');
}

openImgs.forEach(openImg => {
    openImg.addEventListener("click", () => {
        currentImgId = openImg.id;
        currentImgSrc = openImg.src;
        openModal(openImg.src);
    });
})

close.addEventListener("click", closeModal);
