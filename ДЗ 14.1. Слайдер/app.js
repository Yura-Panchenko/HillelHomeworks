const elements = document.querySelectorAll(".slide");
const back = document.querySelector(".back");
const forward = document.querySelector(".forward");
const circlesParent = document.querySelector(".circles-wrapper");

let counter = 0;

addCircles(circlesParent, elements);

elements[counter].classList.remove("hidden");

function addCircles(parent, elements) {
    elements.forEach((_, index) => {
        const circle = document.createElement('div');
        circle.classList.add("circle");
        circle.dataset.index = index;
        parent.appendChild(circle);
    });
}

circlesParent.addEventListener("click", (event) => {
    if (event.target.classList.contains("circle")) {
        const index = parseInt(event.target.dataset.index, 10);
        showSlide(index);
    }
});

back.addEventListener("click", () => {
    showSlide(counter - 1);
});

forward.addEventListener("click", () => {
    showSlide(counter + 1);
});

function showSlide(index) {
    if (index < 0 || index >= elements.length) return;

    elements[counter].classList.add("hidden");
    counter = index;
    elements[counter].classList.remove("hidden");

    updateButtons();
}

function updateButtons() {
    back.classList.toggle("hidden", counter === 0);
    forward.classList.toggle("hidden", counter === elements.length - 1);
}