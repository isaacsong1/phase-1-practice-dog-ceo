console.log('%c HI', 'color: firebrick');

const imgUrl = 'https://dog.ceo/api/breeds/image/random/4';
const breedUrl = 'https://dog.ceo/api/breeds/list/all';

document.addEventListener('DOMContentLoaded', () => {
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(obj => {
        obj.message.forEach(img => addImage(img));
    })
    .catch(error => alert(error));

    fetch(breedUrl)
    .then(resp => {
        if (!resp.ok) {
            alert('Faulty response');
        } 
        return resp.json();
    })
    .then(obj => { 
        breeds = Object.keys(obj.message);
        renderBreedList(breeds);
        dropdownListener();
    })
    .catch(error => alert(error));
})

// Helper Functions
function addImage(img) {
    const image = document.createElement('img');
    image.src = img;
    image.alt = 'Picture of a Dog'

    document.getElementById('dog-image-container').append(image);
}

function renderBreedList(breeds) {
    let ul = document.querySelector('#dog-breeds');
    let liChild = ul.lastElementChild;
    while (!!liChild) {
        ul.removeChild(liChild);
        liChild = ul.lastElementChild;
    }
    breeds.forEach(breed => {
        let li = document.createElement('li');
        li.textContent = breed;
        li.addEventListener('click', event => event.target.style.color = 'red');
        ul.appendChild(li);
    })
}

function dropdownListener() {
    const dropdown = document.querySelector('#breed-dropdown');
    dropdown.addEventListener('change', event => {
        renderBreedList(breeds.filter(breed => breed.startsWith(event.target.value)));
    })
}