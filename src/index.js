console.log('%c HI', 'color: firebrick')


const container = document.querySelector("#dog-image-container")
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const ulContainer = document.querySelector("#dog-breeds")
const dropdown = document.querySelector("#breed-dropdown")
let breedsArray = []

function getImages(){
   fetch(imgUrl)
    .then(res => res.json())
    .then(images => {
        const imgs = images.message
        let imgsArray = createImgElement(imgs)
        renderElement(imgsArray)
    }) 
}
    
    
    
function createImgElement(imgs){
    imgs.map((img) => {
        let i = `<img src=${img}>`
        return i
 })
}
    
   
function renderImg(imgsArray){
    imgsArray.forEach(element => {
        renderElement(element)
})
}
    
function renderElement(element){
    ulContainer.innerHTML += element
}


function getBreeds(){
    fetch(breedUrl)
     .then(res => res.json())
     .then(breeds => {
        const breedsArray = Object.keys(breeds.message)
        const breedsLis = createLiElement(breedsArray)
        renderLis(breedsLis)
  }) 
     
function createLiElement(breedsArray){
    return breedsArray.map((breed) => {
        let li = `<li>${breed}</li>`
        return li
     })
}

function renderLis(breedsLis){
    breedsLis.forEach(element => {
        renderElement(element)
})
}

ulContainer.addEventListener('click', handleClick)

function handleClick(event){
    event.target.style.color = 'red'
}

dropdown.addEventListener('change', handleChange)

function handleChange(event){
    const letter = event.target.value
    const filteredbreeds = breedsArray.filter(breed => breed.startswith(letter))
    const filteredbreedsLis = createLiElement(filteredbreeds)
    ulContainer.innerHTML = ''
    renderLis(filteredbreedsLis)
}

getImages()
getBreeds()
