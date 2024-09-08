const button = document.getElementsByTagName("button")[0];
button.addEventListener('click', function(event) {
    const text = document.getElementsByTagName("h1")[0];
    text.classList.toggle('changeColor');
})