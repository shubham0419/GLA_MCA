

const form  = document.getElementById("form");

// form.addEventListener("submit",(e)=>{
//   e.preventDefault();
//   console.log(e.target.value);
//   const input1 = document.getElementsByName("username").;
//   console.log(input1);

// })

const h1 = document.getElementsByTagName("h1")[0];
const sidebar = document.getElementById("sideBar")
h1.addEventListener("click",()=>{
  sidebar.classList.toggle("background");
})