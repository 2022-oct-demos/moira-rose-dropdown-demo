/* Imports */

/* Get DOM Elements */
const wigSelect = document.getElementById('wig-select');
const wigImg = document.getElementById('wig-img');
const wigChangeCounter = document.getElementById('wig-change-counter');

/* State */
let wigCounter = 0;

/* Events */
wigSelect.addEventListener('change', (e) => {
    //    -   user selection used for img display
    const value = e.target.value;
    wigImg.src = `./assets/${value}.png`;
    // -   increment wig counter
    wigCounter++;
    // -   update view (display state change)
    wigChangeCounter.textContent = `You have changed wigs ${wigCounter} times`;
});

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
