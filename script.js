// Selectors 
const input = document.querySelector('#habit');
const habitForm = document.querySelector('#habit-form');

function retrieve (e) {
    e.preventDefault();  // Prevents the form from reloading the page (default behavior of form submission).
    let newItem = input.value.trim();  // Takes the current value from the input field and stores it in `newItem`.
    console.log(newItem);  // Logs the input value to the console.
};


habitForm.addEventListener('submit', retrieve);