// const countryFrom = document.getElementById("countryFrom");
// const countryTo = document.getElementById("countryTo");

let data;
let countryFromValue;
let exchange;

let countryToValue;

const curruncyChange = ()=>{
  console.log(countryToValue);
  console.log(data);
  console.log(data.conversion_rates[countryToValue]);
}

countryFrom.addEventListener("change", async (e) => {
  countryFromValue = e.target.value;
  console.log(countryFromValue);

  if (e.target.value) {
    const res = await fetch(
      `https://v6.exchangerate-api.com/v6/2c65da8604a4c71624422be8/latest/${countryFromValue}`
    );
    data = await res.json();
  }
});

countryTo.addEventListener("change", (e) => {
  countryToValue = e.target.value;
  curruncyChange();
});
