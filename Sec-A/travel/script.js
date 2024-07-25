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

const destinationForm = document.getElementById("new-schedule-form");
const scheduleItems = document.getElementById("schedule-items");

let userDestinations = [];
const storedDestinations = JSON.parse(localStorage.getItem("userDestinations"));

const showStoredDestinations = () => {
  if (storedDestinations.length > 0) {
    storedDestinations.forEach((destination) => {
      const div = document.createElement("div");
      div.classList.add("schedule-item");
      const img = document.createElement("img");
      img.setAttribute("src", destination.img);
      img.setAttribute("alt", destination.name);
      const name = `<h3>${destination.name}</h3>`;
      const hotel = `<h5> selected hotel: ${destination.hotel?destination.hotel:"not selected"}</h5>`;
      const dateEle = `<p>selected date: ${destination.date}</p>`;
      const info = `<p>${destination.info}</p>`;
      const deleteBtn = `<button id="delete">Delete</button>`
      const show = `<button name="${destination.name}" id="show">show</button>`
      div.append(img);
      const infoContainer = document.createElement("div");
      infoContainer.innerHTML += name;
      infoContainer.innerHTML += hotel;
      infoContainer.innerHTML += dateEle;
      infoContainer.innerHTML += info;
      infoContainer.innerHTML += deleteBtn;
      infoContainer.innerHTML += show;
      div.append(infoContainer);
      scheduleItems.append(div);
    });
  }
};

if(storedDestinations)showStoredDestinations();

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
    for (let hotel of hotels) {
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

//  add destinatiomn
destinationForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const { destination, hotelSelect, date } = e.target;

  const destinationFound = destinations.find(
    (dest) => dest.name == destination.value
  );
  if (destinationFound) {
    const div = document.createElement("div");
    div.classList.add("schedule-item");
    const img = document.createElement("img");
    img.setAttribute("src", destinationFound.Image[0]);
    img.setAttribute("alt", destinationFound.name);
    const name = `<h3>${destinationFound.name}</h3>`;
    const hotel = `<h5> selected hotel: ${hotelSelect.hotel?hotelSelect.hotel:"not selected"}</h5>`;
    const dateEle = `<p>selected date: ${date.value}</p>`;
    const info = `<p>${destinationFound.information}</p>`;
    const deleteBtn = `<button id="delete">Delete</button>`
    div.append(img);
    const infoContainer = document.createElement("div");
    infoContainer.innerHTML += name;
    infoContainer.innerHTML += hotel;
    infoContainer.innerHTML += dateEle;
    infoContainer.innerHTML += info;
    infoContainer.innerHTML += deleteBtn;
    div.append(infoContainer);
    userDestinations.push({
      name: destination.value,
      hotel: hotelSelect.value,
      date: date.value,
      img: destinationFound.Image[0],
      info: destinationFound.information,
    })
    localStorage.setItem("userDestinations",JSON.stringify(userDestinations));
    scheduleItems.append(div);
  } else {
    alert("please select all fields");
  }
});


// delete destinations
scheduleItems.addEventListener("click",(e)=>{
  console.log(e.target.id);
  if(e.target.id == "delete"){
    const destination = e.target.parentElement.parentElement;
    destination.remove();
    userDestinations = userDestinations.filter((dest)=>dest.name != destination.firstElementChild.first)
    localStorage.setItem("userDestinations",JSON.stringify(userDestinations))
  }
})

// popover
const popover = document.getElementById("popover");

scheduleItems.addEventListener("click",(e)=>{
  console.log(e.target.id);
  console.log(e.target);
  if(e.target.id == "show"){
    const destination = e.target;
    const div = destination.parentElement.parentElement;
    const show = div.lastChild.lastChild;
    show.style.display = "none";
    console.log(show);
    popover.innerHTML="";
    popover.append(div);
  }
})
