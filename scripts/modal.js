const openImgs = [...document.querySelectorAll(".gallery-image")];
const modalContainer = document.querySelector("#modal-container");
const modalContent = document.querySelector(".modal__content");
const img = document.querySelector(".modal__img");

const openModal = (imgSrc) => {

    modalContainer.removeAttribute('class');
    modalContainer.classList.add("in");
    document.body.classList.add('modal-active');
    img.src = imgSrc;

}

const closeModal = () => {
    modalContainer.classList.add('out');
    document.body.classList.remove('modal-active');
}

openImgs.forEach(openImg => {
    openImg.addEventListener("click", () => {
        openModal(openImg.src);
    });
})
modalContainer.addEventListener("click", closeModal);