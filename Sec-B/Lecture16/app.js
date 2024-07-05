

const h1 = document.getElementById("head");
const container = document.getElementById("container");

// h1.addEventListener("click",(e)=>{
//   console.log(e.target);
//   container.style.backgroundColor = "red";
// })

h1.addEventListener("click",(e)=>{
  console.log(e.target);
  container.classList.toggle("gradient");
  console.log(container);
})

container.addEventListener("click",(e)=>{
  console.log(e.target);
  console.log(e.target.classList);
})

const form = document.getElementById("form");

form.addEventListener("submit",(e)=>{
  e.preventDefault();
  
  const name = e.target.children[0].value;
  const email = e.target.children[1].value;
  
  e.target.children[0].value = "";
  e.target.children[1].value = "";
  
  console.log(name,email);
})