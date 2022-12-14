let url1 = 'https://thronesapi.com/api/v2/Characters'
let url2 = 'https://api.gameofthronesquotes.xyz/v1/characters'
document.addEventListener('DOMContentLoaded', () => {
    characterQuotes()
    fetchCharacters()
    fetchHouses()
})


function fetchCharacters(){
   fetch(url1)
   .then((res) => res.json())
   .then((data) => renderData(data));
}

function renderData(character){
    let display = document.getElementById('homeDiv')
     
        character.forEach(character => {
        display.innerHTML += `
        
        <div class="col">
          <div class="card">
            <img src="${character.imageUrl}" height= "300" width= "100" class="card-img-top"
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

      
   
    })

}
function characterQuotes(){   
    
    fetch(url2)
    .then((res) => res.json())
    .then((data) => renderQuotes(data));
  
} 
      

function renderQuotes(characters){
    let tableBody = table.querySelector('#tableBody')


    characters.forEach(character => {
      tableBody.innerHTML += `
      <tr>
              <td>${character.name}</td>
              <td>${character.house.name}</td>
              <td>${character.quotes}</td>                                  
  
         </tr>
      `
        
  
    });


}

function fetchHouses() {
  fetch('https://anapioficeandfire.com/api/houses')
         .then((res) => res.json())
         .then((data) => renderHouses(data))

}


function renderHouses(house){
 
  let houseBar = document.getElementById('house-bar')
  house.forEach(house => {
  const span = document.createElement('span')  
  span.innerHTML = house.name
  houseBar.appendChild(span)
  houseBar.style.cursor = 'pointer'
  span.addEventListener('click', () => {
      
      displayHouses(house)
    
      
  })
  })
}

function displayHouses(house) {
  const houseName=  document.getElementById("title")
  houseName.innerHTML = house.name

 const text = document.getElementById("text")
 text.innerHTML = `Coat Of Arms: ${house.coatOfArms}`
 const region = document.getElementById("region")
 region.innerHTML = `Region: ${house.region}`

createQuotes()
}

function createQuotes(){
  let form = document.getElementById('form')
  let table = document.getElementById('tableBody')
  form.addEventListener('submit', (e) =>{
  e.preventDefault()
    fetch('https://api.gameofthronesquotes.xyz/v1/characters', {
      method: 'POST',
    body: JSON.stringify({
      name: name.value,
      house: house.value,
      quote: quote.value,
      
    }),
    headers: {
      'Content-Type': 'application/json'
  
    }
    })
    .then((res) => res.json())
    .then((character) => {  
      table.innerHTML += `
      <tr>
              <td>${character.name}</td>
              <td>${character.house.name}</td>
              <td>${character.quotes}</td>                                  
  
         </tr>
      `
})
   .catch((err) => console.log(err))
  })
  
 
  form.reset()
}




  
