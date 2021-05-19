const types = [...document.querySelectorAll(".company__type")];
const links = [...document.querySelectorAll(".nav__link")];
const navbarOffset = document.querySelector("nav").offsetHeight;
let id;

const scroll = (id) => {
    const section = document.querySelector(`${id}`);
    const content = section.getBoundingClientRect().top + window.pageYOffset - navbarOffset;
    window.scrollTo({ top: content, behavior: 'smooth' });
}

types.forEach(type => {
    type.addEventListener("click", () => {
        if (type.id == "building") {
            id = "#about-us";
        }
        else {
            id = "#shop";
        }

        scroll(id);

    });
});

links.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        id = e.target.hash;
        scroll(id);
    })
})

