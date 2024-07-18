
const form= document.getElementById("form");
const container = document.getElementById("container");
console.log(form);

const todos = [];

const LocalStorage = ()=>{
  const storedTodos = localStorage.getItem("todos");
  console.log(storedTodos);
  // for(let todo of storedTodos){
  //   console.log(todo);
  //   container.innerHTML += todo;
  // }
}

LocalStorage();
let ind =0;
form.addEventListener("submit",(e)=>{
  e.preventDefault();
  const todo = e.target.children[0].value;
  const todoItem = `<div class="todo">${todo} <span class="cross">x</span></div>`;
  container.innerHTML += todoItem;
  todos.push({index:ind,val:todoItem});
  ind++;
  localStorage.setItem("todos",todos);
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

