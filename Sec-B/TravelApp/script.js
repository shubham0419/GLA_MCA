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
// calling local storage function to render all the stored destination
localStorageFun();

// adding select tag for hotel && also options
destinationSelect.addEventListener("change", (e) => {

  const selectedDestination = e.target.value;
  // checking for valid destination
  if (selectedDestination) {
    const destination = destinations.find(
      (singleDestination) => singleDestination.name == selectedDestination
    );
    // getting hotel - select container
    const hotelSelector = document.getElementById("hotel-selector");
    const hotels = destination.hotels;
    // creating select
    const hotelSelect = document.createElement("select");
    // todo - give styling to select by classList.add
    hotelSelect.id = "hotel-select";
    hotelSelect.name = "hotelSelect";
    const option = `<option value="none">Select</option>`;
    hotelSelect.insertAdjacentHTML("beforeend", option);
    for (let hotel of hotels) {
      const option = `<option value="${hotel.name}">${hotel.name}</option>`;
      hotelSelect.insertAdjacentHTML("beforeend", option);
    }
    // label for select
    const label = `<label for="hotel-select">Select hotel : </label>`;
    // empty container so no element will be inside hotel selector
    hotelSelector.innerHTML = "";
    hotelSelector.insertAdjacentHTML("beforeend", label);
    hotelSelector.insertAdjacentHTML("beforeend", hotelSelect.outerHTML);
  }
});

// Add destination
destinationForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // destructue of information we got from FORM
  const { destination, date, hotelSelect } = e.target;
  // getting destination from destinations array choosen by user
  const foundDestination = destinations.find(
    (singleDestination) => singleDestination.name == destination.value
  );

  if (foundDestination) {
    // pushing in array of all destinations added by user
    userDestinations.push({
      name: foundDestination.name,
      hotel: hotelSelect.value,
      date: date.value,
      info: foundDestination.information,
      image: foundDestination.Image[0],
    });

    // storing the array in Local storage
    localStorage.setItem("savedDestinations", JSON.stringify(userDestinations));

    // creating container for user selected destination 
    const div = document.createElement("div");

    // adding style in container
    div.classList.add("schedule-item");

    // creating image of user selected destination
    const image = document.createElement("img");
    image.src = foundDestination.Image[0];
    image.alt = foundDestination.name;

    // creating information for destination 
    const name = `<h3>${foundDestination.name}</h3>`;
    const hotel = `<h4>Selected hotel : ${hotelSelect.value}</h4>`;
    const dateEle = `<p>Bookig date : ${date.value}</p>`;
    const info = `<p>${foundDestination.information}</p>`;
    const deleteBtn = `<button id="delete">Delete</button>`;
    
    // creating container to store image and information
    const containerOfImageInfo = document.createElement("div");
    // adding styling so that image and information is in horizontal position
    containerOfImageInfo.style.display = "flex";
    containerOfImageInfo.style.gap = "10px";

    // adding image to image-information-container
    containerOfImageInfo.append(image);

    // creating another container for all the information
    const ContainerOfInformation = document.createElement("div");
    ContainerOfInformation.innerHTML += name;
    ContainerOfInformation.innerHTML += hotel;
    ContainerOfInformation.innerHTML += dateEle;
    ContainerOfInformation.innerHTML += deleteBtn;

    // pushing information-container in image-information-container
    containerOfImageInfo.append(ContainerOfInformation);

    // pushing the image-information-container in destination container
    div.append(containerOfImageInfo);
    
    // pushing the destination's information in destination container
    div.innerHTML += info;
    
    // pushing the destination container in destinations-items
    scheduleItems.prepend(div);
  } else {
    alert("Please select a destination");
  }
});

// delete
scheduleItems.addEventListener("click", (e) => {
  // checing wether the user click on delete button or not
  if (e.target.id == "delete") {
    const destination = e.target;
    // getting the container div of deleting destination
    const foundDestionation = destination.parentElement.parentElement.parentElement;
    // creating a new array that stores all the destinations exept deleting destination
    const updatedDestinations = userDestinations.filter((destination)=>{
      return destination.name !== foundDestionation.children[0].innerText;
    })
    // removing destination from DOM 
    foundDestionation.remove();
    // storing new array in Local storage
    localStorage.setItem("savedDestinations", JSON.stringify(updatedDestinations));
  }
});
