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

const userDestinations = [];
const destinationForm = document.getElementById("new-schedule-form");
const scheduleItems = document.getElementById("schedule-items");

const storedDestinations = JSON.parse(localStorage.getItem("savedDestinations"));

const localStorageFun = () => {
  console.log(storedDestinations);
  if (storedDestinations) {
    console.log(storedDestinations);
    storedDestinations.forEach((destination) => {
      const div = document.createElement("div");

      const image = document.createElement("img");
      image.src = destination.image;
      image.alt = destination.name;

      const name = `<h3>${destination.name}</h3>`;
      const hotel = `<h4>Selected hotel : ${destination.hotel}</h4>`;
      const dateEle = `<p>Bookig date : ${destination.date}</p>`;
      const info = `<p>${destination.info}</p>`;
      const deleteBtn = `<button id="delete">Delete</button>`;
      div.classList.add("schedule-item");

      const containerOfImageInfo = document.createElement("div");
      containerOfImageInfo.style.display = "flex";
      containerOfImageInfo.style.gap = "10px";

      containerOfImageInfo.append(image);

      const ContainerOfInformation = document.createElement("div");
      ContainerOfInformation.innerHTML += name;
      ContainerOfInformation.innerHTML += hotel;
      ContainerOfInformation.innerHTML += dateEle;
      ContainerOfInformation.innerHTML += deleteBtn;

      containerOfImageInfo.append(ContainerOfInformation);

      div.append(containerOfImageInfo);
      div.innerHTML += info;
      scheduleItems.prepend(div);
    });
  }
};

localStorageFun();

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
    const label = `<label for="hotel-select">Select hotel : </label>`;
    hotelSelector.innerHTML = "";
    hotelSelector.insertAdjacentHTML("beforeend", label);
    hotelSelector.insertAdjacentHTML("beforeend", hotelSelect.outerHTML);
  }
});


// Add destination
destinationForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const { destination, date, hotelSelect } = e.target;

  const foundDestination = destinations.find(
    (singleDestination) => singleDestination.name == destination.value
  );

  if (foundDestination) {
    userDestinations.push({
      name: foundDestination.name,
      hotel: hotelSelect.value,
      date: date.value,
      info: foundDestination.information,
      image: foundDestination.Image[0],
    });

    localStorage.setItem("savedDestinations", JSON.stringify(userDestinations));

    const div = document.createElement("div");

    const image = document.createElement("img");
    image.src = foundDestination.Image[0];
    image.alt = foundDestination.name;

    const name = `<h3>${foundDestination.name}</h3>`;
    const hotel = `<h4>Selected hotel : ${hotelSelect.value}</h4>`;
    const dateEle = `<p>Bookig date : ${date.value}</p>`;
    const info = `<p>${foundDestination.information}</p>`;
    const deleteBtn = `<button id="delete">Delete</button>`;
    div.classList.add("schedule-item");

    const containerOfImageInfo = document.createElement("div");
    containerOfImageInfo.style.display = "flex";
    containerOfImageInfo.style.gap = "10px";

    containerOfImageInfo.append(image);

    const ContainerOfInformation = document.createElement("div");
    ContainerOfInformation.innerHTML += name;
    ContainerOfInformation.innerHTML += hotel;
    ContainerOfInformation.innerHTML += dateEle;
    ContainerOfInformation.innerHTML += deleteBtn;

    containerOfImageInfo.append(ContainerOfInformation);

    div.append(containerOfImageInfo);
    div.innerHTML += info;
    scheduleItems.prepend(div);
  } else {
    alert("Please select a destination");
  }
});

// delete
scheduleItems.addEventListener("click", (e) => {
  if (e.target.id == "delete") {
    const destination = e.target;
    const foundDestionation = destination.parentElement.parentElement.parentElement;
    const updatedDestinations = userDestinations.filter((destination)=>{
      return destination.name !== foundDestionation.children[0].innerText;
    })
    foundDestionation.remove();
    localStorage.setItem("savedDestinations", JSON.stringify(updatedDestinations));
  }
});
