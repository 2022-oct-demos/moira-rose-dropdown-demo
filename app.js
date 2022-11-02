/* Imports */

/* Get DOM Elements */
const wigSelect = document.getElementById('wig-select');
const wigImg = document.getElementById('wig-img');
const wigChangeCounter = document.getElementById('wig-change-counter');

const locationSelect = document.getElementById('location-select');
const locationImg = document.getElementById('location-img');
const locationChangeCounter = document.getElementById('location-change-counter');

const aphorismInput = document.getElementById('aphorism-input');
const addButton = document.getElementById('add-button');
const aphorismList = document.getElementById('aphorism-list');

/* State */
let wigCounter = 0;
let locationCounter = 0;
let aphorisms = [];

/* Events */
wigSelect.addEventListener('change', (e) => {
    //    -   user selection used for img display
    const value = e.target.value;
    wigImg.src = `./assets/${value}.png`;
    // -   increment wig counter
    wigCounter++;
    // -   update view (display state change)
    displayStats();
});

locationSelect.addEventListener('change', (e) => {
    const value = e.target.value;
    locationImg.src = `./assets/${value}.png`;
    locationCounter++;
    displayStats();
});

addButton.addEventListener('click', () => {
    // -   push the input value into the array in state
    aphorisms.push(aphorismInput.value);
    // -   display all of the aphorisms in the array
    displayAphorisms();
    // -   (bonus) reset the input value (to empty)
    aphorismInput.value = '';
});

/* Display Functions */
function displayStats() {
    wigChangeCounter.textContent = `You have changed wigs ${wigCounter} times`;
    locationChangeCounter.textContent = `You have changed locations ${locationCounter} times`;
}

function displayAphorisms() {
    aphorismList.textContent = '';
    for (let aphorism of aphorisms) {
        const p = document.createElement('p');
        p.textContent = aphorism;
        aphorismList.append(p);
    }
}

// (don't forget to call any display functions you want to run on page load!)
