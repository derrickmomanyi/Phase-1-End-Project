let url1 = 'https://thronesapi.com/api/v2/Characters'                  //first api
let url2 = 'https://json-mock-cp-xpzx.onrender.com/quotes'                              //second api
document.addEventListener('DOMContentLoaded', () => {                  //this is an event listener that allows the rest of the html to load before our code loads
    characterQuotes()
    fetchCharacters()
    fetchHouses()
    createQuotes()
})


function fetchCharacters(){                               //a function that fetches the characters from the game of thrones first api
   fetch(url1)
   .then((res) => res.json())                             //converts our api data to readable JSON format
   .then((data) => renderData(data));                     //renders our data to the DOM
}

function renderData(character){
    let display = document.getElementById('homeDiv')       //gets the display div where we will render our data
     
        character.forEach(character => {                   //for each character display; image, title, fullName, firstName & lastName
        display.innerHTML += `                     
        
        <div class="col">
          <div class="card">
            <img src="${character.imageUrl}" height= "300" width= "90" class="card-img-top"
            alt="Card image cap"> 
            <div class="card-body">
              <h5 class="card-title">Name: ${character.fullName}</h5>
                 <p class="card-text">Title: ${character.title}</p>
            </div>
            <ul class="list-group list-group-flush">
                 <li class="list-group-item">First Name: ${character.firstName}</li>
                 <li class="list-group-item">Allegiance: ${character.lastName}</li>
                 <li class="list-group-item">House: ${character.family}</li>
                 </ul>
          </div>
        </div>
       
        `
   
                                                           //displays the list of characters in the div in the card we created
   
    })

}
function characterQuotes(){                            //function to fetch the character quotes from our second api
    
    fetch(url2)
    .then((res) => res.json())                         //converts our api data to readable JSON format 
    .then((data) => renderQuotes(data));               //renders our data to the DOM
  
} 
      

function renderQuotes(characters){
    let tableBody = table.querySelector('#tableBody')                 //gets the tableBody div where we will render our data


    characters.forEach(character => {                                 //for each character display; name,house & quotes
      tableBody.innerHTML += `
      <tr>
              <td>${character.name}</td>
              <td>${character.house.name}</td>
              <td>${character.quotes}</td>                                  
  
         </tr>
      `
        
  
    });


}

function fetchHouses() {                                              //function to fetch the character houses from our third api
  fetch('https://anapioficeandfire.com/api/houses')
         .then((res) => res.json())                                   //converts our api data to readable JSON format
         .then((data) => renderHouses(data))                          //renders our data to the DOM

}


function renderHouses(house){
 
  let houseBar = document.getElementById('house-bar')                 //gets the houseBar div where we will render our data
    house.forEach(house => {                                          //for each house create span, add a cursor on the span as you hover
    const span = document.createElement('span')  
    span.innerHTML = house.name
    houseBar.appendChild(span)
    houseBar.style.cursor = 'pointer'
    span.addEventListener('click', () => {                            //add a click event as you click it displays the rest of the house details
                                  
        displayHouses(house)
            
    })
    })
}

function displayHouses(house) {                                          //displays the house name, coat of arms & region
  const houseName=  document.getElementById("title")
  houseName.innerHTML = house.name

 const text = document.getElementById("text")
 text.innerHTML = `Coat Of Arms: ${house.coatOfArms}`
 const region = document.getElementById("region")
 region.innerHTML = `Region: ${house.region}`

}

function createQuotes(){                                                         // a function that adds on the quote from characters 
  let form = document.getElementById('form')
  let table = document.getElementById('tableBody')
  let name = document.getElementById('name')
  let house = document.getElementById('house')
  let quote = document.getElementById('quote')
  form.addEventListener('submit', (e) =>{                                         //adds a submit event listener to submit the inputted details
  e.preventDefault()
  
      const postQuote = {                                                        //a post method that takes in; name, house & quotes values        
      method: 'POST',
    body: JSON.stringify({
      name: name.value,                                                          //takes in the name value
      house: house.value,                                                        //takes in the house value
      quote: quote.value,                                                        //takes in the quote value
      
    }),
    headers: {
      'Content-Type': 'application/json'
  
    }
    }
    fetch('https://json-mock-cp-xpzx.onrender.com/quotes', postQuote)
    .then((res) => res.json())                                                   //converts our data to JSON format
    .then((character) => {                                                       //for the data display it on the DOM
      table.innerHTML += `
      <tr>
              <td>${character.name}</td>
              <td>${character.house}</td>
              <td>${character.quote}</td>                                  
  
         </tr>
      `
})
 
  })

  form.reset()                                                                     // resets the form after you input the details
}




  
