const addToDo = document.querySelector('.addToDo');
const addBtn = document.querySelector('.addBtn');
const form = document.querySelector('form');

function getCounter() {
    let idCounter;
    if (!localStorage.getItem('idCounter')) {
        idCounter = 0;
        localStorage.setItem('idCounter', JSON.stringify(idCounter));
    } else {
        idCounter = parseInt(localStorage.getItem('idCounter'));
    }
    return idCounter;
}

function increaseCounter(idCounter) {
    idCounter++;
    localStorage.setItem('idCounter', JSON.stringify(idCounter));
    return idCounter;
}

function getToDos() {
    const toDos = JSON.parse(localStorage.getItem('toDos'));
    return toDos ? toDos : [];
}

function removeAllToDos() {
    const allToDos = document.querySelectorAll('.toDo');
    allToDos.forEach(toDo => toDo.remove());
}

function showToDos() {
    const toDos = getToDos();
    if (toDos == undefined) {
        return;
    }
    removeAllToDos();
    toDos.forEach(toDo => {
        createToDo(toDo.id, toDo.checkbox, toDo.value);
    });
}

function createToDo(id, checkboxStatus, inputValue) {
    const parentDiv = document.createElement('div');
    parentDiv.classList.add('toDo');
    parentDiv.setAttribute('data-id', `${id}`);

    const label = document.createElement('label');
    label.classList.add('toDoText');

    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.checked = (checkboxStatus === 'checked'); // Установите состояние чекбокса

    const value = document.createElement('span');
    value.classList.add('text');
    if (checkboxStatus === "checked") {
        value.classList.add('done');
    }
    value.textContent = inputValue;

    const btn = document.createElement('input');
    btn.classList.add('removeBtn');
    btn.setAttribute('type', 'button');
    btn.setAttribute('value', 'Видалити');

    label.appendChild(checkbox);
    label.appendChild(value);
    parentDiv.appendChild(label);
    parentDiv.appendChild(btn);
    form.appendChild(parentDiv);
}

function addToStorage(id, checkboxStatus, inputValue) {
    const newToDo = {
        id: id,
        checkbox: checkboxStatus,
        value: inputValue
    };
    const toDos = getToDos();
    toDos.push(newToDo);
    localStorage.setItem('toDos', JSON.stringify(toDos));
}

function changeCheckbox(id, checkboxStatus) {
    let toDos = getToDos();
    toDos.forEach(toDo => {
        if (toDo.id == parseInt(id)) {
            toDo.checkbox = checkboxStatus;
        }
    });
    localStorage.setItem('toDos', JSON.stringify(toDos));
}

function deleteTodo(id) {
    let toDos = getToDos();
    for (let i = 0; i < toDos.length; i++) {
        if (toDos[i].id == parseInt(id)) {
            toDos.splice(i, 1);
            break;
        }
    }
    localStorage.setItem('toDos', JSON.stringify(toDos));
}

showToDos();

addBtn.addEventListener('click', () => {
    if (addToDo.value === "") return;
    const currentCounter = increaseCounter(getCounter());
    createToDo(currentCounter, "default", addToDo.value);
    addToStorage(currentCounter, "default", addToDo.value);
    addToDo.value = "";
});

form.addEventListener('click', (event) => {
    if (event.target.classList.contains("removeBtn")) {
        event.target.parentElement.remove();
        const id = event.target.parentElement.getAttribute('data-id');
        deleteTodo(id);
    }
});

form.addEventListener('click', (event) => {
    if (event.target.type === "checkbox") {
        const checkbox = event.target;
        const valueSpan = checkbox.nextElementSibling;
        valueSpan.classList.toggle('done');
        
        let checkboxStatus = valueSpan.classList.contains('done') ? 'checked' : 'default';
        const id = checkbox.parentElement.parentElement.getAttribute('data-id');
        changeCheckbox(id, checkboxStatus);
    }
});
