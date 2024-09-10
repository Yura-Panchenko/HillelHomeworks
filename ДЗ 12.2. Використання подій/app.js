const container = document.querySelector('#container');
container.addEventListener("click", function(event) {
    alert(`Клікнуто на кнопці: ${event.target.value}`);
});