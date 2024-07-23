// script.js

// Toggle dark mode
document.getElementById('dark-mode-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Responsive navbar toggle
document.getElementById('mobile-menu').addEventListener('click', () => {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
});

const usersDestinations = [];

const date = document.getElementById("dateAdd");
const destinationSelect = document.getElementById("destination");
const hotelContainer = document.getElementById("hotelContainer")

destinationSelect.addEventListener("change",(e)=>{
    const hotelInput = document.createElement("select");
    hotelInput.setAttribute("id","hotel");
    hotelInput.setAttribute("name","hotel");
    const availableHotels = destinations.find((destination)=>destination.name==e.target.value);
    availableHotels.hotels.forEach(hotel=>{
        const hotelOption = `<option value="${hotel.name}">${hotel.name}</option>`;
        hotelInput.innerHTML+=hotelOption;
    })
    hotelContainer.innerHTML = "";
    hotelContainer.appendChild(hotelInput);
})

console.log(date);
const selectedDestinaton = document.getElementById("destination");

const form = document.getElementById("new-schedule-form");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const destination = destinations.find((destination)=>destination.name==e.target.destination.value);
    console.log(destination);
    const div =  document.createElement('div');
    const image = `<img src="${destination.Image[0]} alt="${destination.name}"`;
    const name = `<h3>${destination.name}</h3>`
    const hotel = `<h5>${e.target.hotel.value}</h5>`
    const date = `<p>${e.target.date.value}</p>`
    const info = `<p>${destination.information}</p>`
    console.log(image);
    div.innerHTML += image;
    console.log(div);
    div.innerHTML += name;
    div.innerHTML += hotel;
    div.innerHTML += date;
    div.innerHTML += info;
    console.log(div);
})