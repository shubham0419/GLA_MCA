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
    hotelSelect.name = "hotel-select";
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
