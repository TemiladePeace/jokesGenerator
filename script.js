const jokeForm = document.getElementById('jokeForm');
const jokesText = document.getElementById('jokesText');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');


 jokeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const firstName = firstNameInput.value === '' ? 'Peachy' : firstNameInput.value;
    const lastName = lastNameInput.value === '' ? 'Peace' : lastNameInput.value;



    const url = `https://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`;

    fetch(url)
        .then( (res) => {
        return res.json();
    })
    .then ( (data) => {
        jokesText.innerHTML  = data.value.joke;
    })
});

    

//es8 another way to fetch api, then insert "async" to the listener function
// const res = await fetch (url);
//const data = await res.json();
//jokesText.innerHTML  = data.value.joke;