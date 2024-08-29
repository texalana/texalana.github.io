// const DOG_URL = "https://dog.ceo/api/breeds/image/random";



// const doggos = document.querySelector(".doggos");

// function addNewDoggo() {
//     // show loading spinner 
//     const promise = fetch(DOG_URL);
//     promise
//       .then(function(response) {
//         const processingPromise = response.json();
//         return processingPromise;
//       })
//       .then(function(processedResponse) {
//         const img = document.createElement("img");
//         img.src = processedResponse.message;
//         img.alt = "Cute doggo";
//         doggos.appendChild(img);

//         // stop showing the spinner
//       });
//   }
  
//   document.querySelector(".add-doggo").addEventListener("click", addNewDoggo);


const BREEDS_URL = "https://dog.ceo/api/breeds/list/all"
  const select = document.querySelector(".breeds")
  const img = document.querySelector('.dog-img')

  fetch(BREEDS_URL)
  .then(response => {
    return response.json();
  })
  .then(data =>{
    const breedsObject = data.message
    const breedsArray = Object.keys(breedsObject)
    console.log(breedsArray);
    

    for (let i = 0; i < breedsArray.length; i++) {
        const option = document.createElement("option")
        option.value = breedsArray[i];
        option.innerText = breedsArray[i]; 
        select.appendChild(option)
    }
  })

  select.addEventListener("change", function(event) {
  
    let url = `https://dog.ceo/api/breed/${event.target.value}/images/random`

    getDoggo(url); 
  });


  
  const spin = document.querySelector(".spin")

  function getDoggo(url) {
    spin.classList.add("show")
    img.classList.remove("show")
    fetch(url)
        .then(response => {
            return response.json()
        })
        .then (data => {
            img.src = data.message
            // spin.classList.remove("show")
            // img.classList.add("show")
        })
  }

  img.addEventListener("load", function() {
 spin.classList.remove("show")
img.classList.add("show")
  })