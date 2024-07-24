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
    const label = `<label for="hotel-select">Select hotel : </label>`;
    hotelSelector.innerHTML = "";
    hotelSelector.insertAdjacentHTML("beforeend", label);
    hotelSelector.insertAdjacentHTML("beforeend", hotelSelect.outerHTML);
  }
});

const destinationForm = document.getElementById("new-schedule-form");
const scheduleItems = document.getElementById("schedule-items");

destinationForm.addEventListener("submit",(e)=>{
  e.preventDefault();

  const {destination,date,hotelSelect} = e.target;

  const div = document.createElement("div");

  const foundDestination = destinations.find(
    (singleDestination) => singleDestination.name == destination.value
  );

  const image = document.createElement("img");
  image.src = foundDestination.Image[0];
  image.alt = foundDestination.name;
  
  const name = `<h3>${foundDestination.name}</h3>`;
  const hotel = `<h4>Selected hotel : ${hotelSelect.value}</h4>`
  const dateEle = `<p>Bookig date : ${date.value}</p>`;
  const info = `<p>${foundDestination.information}</p>`
  div.classList.add("schedule-item");

  const divInside = document.createElement("div");
  divInside.style.display = "flex"
  divInside.style.gap = "10px"

  divInside.append(image);
  
  const divInsideInside = document.createElement("div");
  divInsideInside.innerHTML += name;
  divInsideInside.innerHTML += hotel;
  divInsideInside.innerHTML += dateEle;

  divInside.append(divInsideInside);

  div.append(divInside)
  div.innerHTML += info;
  scheduleItems.prepend(div);
})


