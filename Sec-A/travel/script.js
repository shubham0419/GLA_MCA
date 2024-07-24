// script.js

// Toggle dark mode
document.getElementById("dark-mode-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Responsive navbar toggle
document.getElementById("mobile-menu").addEventListener("click", () => {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("active");
});

destinationSelect.addEventListener("change", (e) => {
  const selectedDestination = e.target.value;
  if (selectedDestination) {
    const destination = destinations.find(
      (singleDestination) => singleDestination.name == selectedDestination
    );
    const hotelSelector = document.getElementById("hotel-selector");
    const hotels = destination.hotels;
    const hotelSelect = document.createElement("select");
    // todo - give styling to select by classList.add
    hotelSelect.id = "hotel-select";
    hotelSelect.name = "hotelSelect";
    for(let hotel of hotels){
        const option = `<option value="${hotel.name}">${hotel.name}</option>`;
        hotelSelect.insertAdjacentHTML("beforeend", option);
      }
    console.log(hotelSelect);
    const label = `<label for="hotel-select">Selct hotel : </label>`;
    hotelSelector.innerHTML = "";
    hotelSelector.insertAdjacentHTML("beforeend", label);
    hotelSelector.insertAdjacentHTML("beforeend", hotelSelect.outerHTML);
  }
});


const destinationForm = document.getElementById("new-schedule-form");
const scheduleItems = document.getElementById("schedule-items");

destinationForm.addEventListener("submit",(e)=>{
  e.preventDefault();

  const {destination,hotelSelect,date} = e.target;

  const destinationFound = destinations.find((dest)=>dest.name==destination.value);
    console.log(destinationFound)
    const div =  document.createElement('div');
    const img =  document.createElement('img');
    img.setAttribute("src",destinationFound.Image[0]);
    img.setAttribute("alt",destinationFound.name);
    const name = `<h3>${destinationFound.name}</h3>`
    const hotel = `<h5>${hotelSelect.value}</h5>`
    const dateEle = `<p>${date.value}</p>`
    const info = `<p>${destinationFound.information}</p>`
    div.append(img);
    div.innerHTML += name;
    div.innerHTML += hotel;
    div.innerHTML += dateEle;
    div.innerHTML += info;
    scheduleItems.append(div);
});



