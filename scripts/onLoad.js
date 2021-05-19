const target = [...document.querySelectorAll('.load')];

const options = {
    treshold: 1.0,
    // rootMargin: '200px'
}

const addAnimation = (element, name) => {
    element.style.animationName = `${name}`;
    element.style.animationDuration = "1s";
    element.style.animationfillMode = "forwards";
    element.classList.remove("load");
    // element.style.animationPlayState = "running";

}

const getAnimationName = (entry) => {
    let name;
    if (entry.classList.contains("left")) {
        name = "fromLeft";

    }
    else if (entry.classList.contains("right")) {
        name = "fromRight";

    }
    else if (entry.classList.contains("top")) {
        name = "fromTop";

    }
    else {
        name = "fromBottom";
    }

    addAnimation(entry, name);
}

const observer = new IntersectionObserver((entries, o) => {
    entries.forEach(entry => {

        if (entry.isIntersecting) {
            getAnimationName(entry.target);
            observer.unobserve(entry.target);
        }

    });
}, options);


target.forEach(section => {
    observer.observe(section);
})

