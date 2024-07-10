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
countyFrom.addEventListener("change", (e) => {
  countryFromValue = e.target.value;
  if (e.target.value) {
    const img = `<img src="https://flagsapi.com/${
      countryFromValue[0] + countryFromValue[1]
    }/shiny/64.png">`;
    div1.innerHTML = img;
  }
});

let countryToValue = "INR";
const div2 = document.getElementById("img2");
countyTo.addEventListener("change", (e) => {
  countryToValue = e.target.value;
  if (e.target.value) {
    const img = `<img src="https://flagsapi.com/${
      countryToValue[0] + countryToValue[1]
    }/shiny/64.png">`;
    div2.innerHTML = img;
  }
  currencyChange();
});

const show = document.getElementById("show")
const currencyChange = async () => {
  if (countryFromValue != countryToValue) {
    const res = await fetch(
      `https://v6.exchangerate-api.com/v6/2c65da8604a4c71624422be8/latest/${countryFromValue}`
    );
    const data = await res.json();
    console.log(data.conversion_rates[countryToValue]);

    show.innerHTML = `<h5>1 ${countryFromValue} = ${data.conversion_rates[countryToValue]} ${countryToValue}</h5>`
  }
};


