const parent = document.querySelector('#parent');
const createBtn = document.querySelector('#create');
const value = document.querySelector('#value');

parent.addEventListener("click", function(event) {
    if (event.target.type === 'button') {
       event.target.parentElement.remove();
    };
});

createBtn.addEventListener("click", function(){
    if (value.value !== "") {
        const newRow = document.createElement('li');
        const newToDo = document.createElement('p');
        newToDo.textContent = value.value;
        const newBtn = document.createElement('input');
        newBtn.setAttribute('type', 'button');
        newBtn.setAttribute('value', 'Видалити');
        newRow.appendChild(newToDo);
        newRow.appendChild(newBtn);
        parent.appendChild(newRow);
        value.value = '';
    }
});