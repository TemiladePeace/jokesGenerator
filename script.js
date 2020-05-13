const joke = document.getElementById('joke');

setInterval( function jokesRandom (){
    const jokeUrl = `https://jokeapi-v2.p.rapidapi.com/joke/Programming?type=single`;

    fetch(jokeUrl, {
       method: 'GET',
       headers: {
        "x-rapidapi-host": "jokeapi-v2.p.rapidapi.com",
         "x-rapidapi-key": "44c0eab0e5mshb3c2dabcee14812p1edf1bjsnb485631d53cc",
         "useQueryString": true
       }
   })
       .then( (res) => {
           return res.json();
       })
       .then ( (data) => {
            joke.innerHTML  = data.joke;
       }) 
   
      }  ,10000);