import '../styles.css';

const navbar = document.querySelector('.navbar');
const h3 = document.querySelector('h3');
let nextPage = "";

navbar.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        const header = event.target.textContent;
        document.querySelector('h2').textContent = header;

        fetch(`https://swapi.dev/api/${header.charAt(0).toLowerCase() + header.slice(1)}/`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error');
                }
                return response.json();
            })
            .then(result => {
                document.querySelector('.content').innerHTML = '';
                showElements(result);
                if (result.next !== null) {
                    h3.classList.remove('hidden');
                } else {
                    h3.classList.add('hidden');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
});

h3.addEventListener('click', function() {
    fetch(`${nextPage}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error');
            }
            return response.json();
        })
        .then(result => {
            showElements(result);
            if (result.next !== null) {
                h3.classList.remove('hidden');
            } else {
                h3.classList.add('hidden');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

document.querySelector('.content').addEventListener('click', function(event) {
    if (event.target.hasAttribute('url')) { 
        const url = event.target.getAttribute('url');
        fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error');
            }
            return response.json();
        })
        .then(result => {
            createModal(result);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
});

function createModal(result){
    const modal = document.getElementById('modal');
    modal.classList.remove('hidden');
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    const closeButton = document.createElement('span');
    closeButton.classList.add('close-btn');
    closeButton.textContent = '×';

    const nameHeader = document.createElement('h2');
    nameHeader.textContent = result.name;

    modalContent.appendChild(closeButton);
    modalContent.appendChild(nameHeader);

    createNewElementsInModal(result, modalContent);

    modal.appendChild(modalContent);

    closeButton.addEventListener('click', () => {
        modal.classList.add('hidden');
        modalContent.remove();
    });
};

function createNewElementsInModal(object, modalContent) {
    const keys = Object.keys(object);
    for (let key of keys) {
        if (key !== 'url' && key !== 'created' && key !== 'edited') {
            let value = object[key];

            if (Array.isArray(value) && value.length > 0 && /^https:\/\/swapi\.dev\/api\//.test(value[0])) {
                Promise.all(value.map(item => getItemName(item)))
                    .then(results => {
                        const createdElement = document.createElement('p');
                        createdElement.innerHTML = `<strong>${(key.charAt(0).toUpperCase() + key.slice(1)).replace(/_/g, ' ')}:</strong> ${results.join(', ')}`;
                        modalContent.appendChild(createdElement);
                    });

            } else if (/^https:\/\/swapi\.dev\/api\//.test(value)) {
                getItemName(value)
                    .then(result => {
                        const createdElement = document.createElement('p');
                        createdElement.innerHTML = `<strong>${(key.charAt(0).toUpperCase() + key.slice(1)).replace(/_/g, ' ')}:</strong> ${result}`;
                        modalContent.appendChild(createdElement);
                    });

            } else {
                const createdElement = document.createElement('p');
                createdElement.innerHTML = `<strong>${(key.charAt(0).toUpperCase() + key.slice(1)).replace(/_/g, ' ')}:</strong> ${value}`;
                modalContent.appendChild(createdElement);
            }
        }
    }
}

function getItemName(item) {
    return fetch(item)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error');
            }
            return response.json();
        })
        .then(result => {
            const firstKey = Object.keys(result)[0];
            return result[firstKey];
        })
        .catch(error => {
            console.error('Error:', error);
            return 'Error loading data';
        });
}

function showElements(result) {
    const elements = result.results;
    for (let element of elements) {
        showElement(element);
    }
    nextPage = result.next;
}

function showElement(element) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('url', element.url);

    const name = document.createElement('p');
    name.classList.add('name');
    const nameText = document.createElement('strong');
    nameText.textContent = "Name: ";
    const nameValue = document.createElement('span');
    nameValue.textContent = element.name;
    name.appendChild(nameText);
    name.appendChild(nameValue);

    card.appendChild(name);
    document.querySelector('.content').appendChild(card);
}