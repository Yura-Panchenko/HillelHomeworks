let forms = [
    {
        obj: document.querySelector("#name"),
        pattern: /^[A-ZА-Я][a-zа-я'-]{1,49}$/
    },
    {
        obj: document.querySelector("#message"),
        pattern: /^.{5,}$/
    },
    {
        obj: document.querySelector("#tel"),
        pattern: /^\+380\d{9}$/
    },
    {
        obj: document.querySelector("#email"),
        pattern: /^[\w.-]+@[a-zA-Z\d-]+(\.[a-zA-Z\d-]+)+$/
    }
];

const button = document.querySelector("#button");

button.addEventListener("click", () => {
    const spans = document.querySelectorAll('span');
    spans.forEach(span => {
        span.classList.add('hidden');
    });

    forms.forEach(form => {
        if (!validate(form.obj, form.pattern)) {
            form.obj.nextElementSibling.classList.remove('hidden');
        }
    });
});

function validate(obj, pattern) {
    return pattern.test(obj.value);
}