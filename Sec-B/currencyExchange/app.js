console.log(countyCOde);

const countyFrom = document.getElementById("countryFrom");
const countyTo = document.getElementById("countryTo");

countyCOde.forEach((code)=>{
  const option = `<option value="${code}"></option>`
  countyFrom.insertAdjacentHTML("beforeend", option);
  countyTo.insertAdjacentHTML("beforeend", option);
})