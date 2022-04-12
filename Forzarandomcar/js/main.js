//Get a dog photo from the dog.ceo api and place the photo in the DOM
// document.querySelector('button').addEventListener('click', getFetch)

// function getFetch(){
//   const choice = document.querySelector('input').value
//   const url = 'https://pokeapi.co/api/v2/pokemon/'+choice

  fetch("https://forza-api.tk/")
      .then(res => res.json()) // parse response as JSON
      .then(data => {
          console.log(data)
        document.querySelector('img').src = data.image
      })
      .catch(err => {
          console.log(`error ${err}`)
      });

   