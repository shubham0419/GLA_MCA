
const form= document.getElementById("form");
const container = document.getElementById("container");
console.log(form);
form.addEventListener("submit",(e)=>{
  e.preventDefault();
  const todo = e.target.children[0].value;
  const todoItem = `<div class="todo">${todo} <span class="cross">x</span></div>`;
  container.innerHTML += todoItem;
})

container.addEventListener("click",(e)=>{
  // console.log(e.target);
  if(e.target.classList.contains("todo")){
    e.target.style.textDecoration="line-through";
  }
  if(e.target.classList.contains("cross")){
    e.target.parentElement.remove();
  }
})
