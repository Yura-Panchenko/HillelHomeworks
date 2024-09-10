const inputBtn = document.querySelector('input[name="inputURL"]');
const openBtn = document.querySelector('input[name="openURL"]');
let url = window.location.href;

function validateURL(url) {
    const pattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/;
    return pattern.test(url);
};

inputBtn.addEventListener("click", function() {
    do {
        url = prompt('Введіть посилання:');
    } while (!validateURL(url));
});

openBtn.addEventListener("click", function() {
    if (url != window.location.href) {
        window.location.href = url;
    };
});
