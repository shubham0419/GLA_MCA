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


const date = document.getElementById("dateAdd");

console.log(date);
const selectedDestinaton = document.getElementById("destination");

date.addEventListener("change",(e)=>{
    const input  = document.createElement("select");
    input.setAttribute("id", "hotel");
    input.setAttribute("name", "hotel");
    const destination = selectedDestinaton.value;
    console.log(destination);
    const place = destinations.find(place)
    for(let i=0;i<destination.length;i++){
        let option = `<option value="${destination[i].name}">${destination[i].name}</option>`;
        input.innerHTML += option;
    }
    selectedDestinaton.after(input);
    console.log(selectedDestinaton);
})
