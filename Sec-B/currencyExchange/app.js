// console.log(countyCOde);

const countyFrom = document.getElementById("countryFrom");
const countyTo = document.getElementById("countryTo");
countyCOde.forEach((code) => {
  const option = `<option value="${code}">${code}</option>`;
  countyFrom.insertAdjacentHTML("beforeend", option);
  countyTo.insertAdjacentHTML("beforeend", option);
});

let countryFromValue = "INR";
const div1 = document.getElementById("img1");
const img = `<img src="https://flagsapi.com/IN/shiny/64.png">`;
div1.innerHTML = img;
countyFrom.addEventListener("change", (e) => {
  countryFromValue = e.target.value;
  if (e.target.value) {
    const img = `<img src="https://flagsapi.com/${
      countryFromValue[0] + countryFromValue[1]
    }/shiny/64.png">`;
    div1.innerHTML = img;
    currencyChange();
  }
});

let countryToValue = "INR";
const img2 = document.getElementById("img2");
countyTo.addEventListener("change", (e) => {
  countryToValue = e.target.value;
  if (e.target.value) {
    const img = `https://flagsapi.com/${
      countryToValue[0] + countryToValue[1]
    }/shiny/64.png`;
    img2.setAttribute("src",img)
  }
  currencyChange();
});

const input = document.getElementById("value");

const show = document.getElementById("show")
const currencyChange = async () => {
  let multiplyer = input.value?Number(input.value):1;
  if (countryFromValue != countryToValue) {
    show.innerHTML = `<h5>Lodaing...</h5>`
    const res = await fetch(
      `https://v6.exchangerate-api.com/v6/2c65da8604a4c71624422be8/latest/${countryFromValue}`
    );
    const data = await res.json();
    console.log(data.conversion_rates[countryToValue]);
    show.innerHTML = `<h5>${multiplyer} ${countryFromValue} = ${data.conversion_rates[countryToValue]*multiplyer} ${countryToValue}</h5>`
  }
};

