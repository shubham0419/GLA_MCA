const form = document.getElementById("form");
const container = document.getElementById("container");

let todos = [];

const localTodos = JSON.parse(localStorage.getItem("todos"));
// console.log(localTodos);
if (localTodos) {
  for (let todo of localTodos) {
    todos.push(todo);
  }
  for(let todo of todos){
    const todoHTML = `<div id=${todo.id} class="todo"> ${todo.val}
    <span id="cross">x</span>
    </div>`;
    container.innerHTML += todoHTML;
  }
}
// let todoId=0;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target.children[0].value);
  //generate random id
  const todoId = Math.random().toString();
  if (e.target.children[0].value.length > 0) {
    const todo = `<div id=${todoId} class="todo"> ${e.target.children[0].value}
    <span id="cross">x</span>
    </div>`;
    container.innerHTML += todo;
    todos.push({ id: todoId, val: e.target.children[0].value });
    localStorage.setItem("todos", JSON.stringify(todos));
    e.target.children[0].value = "";
  }
});

container.addEventListener("click", (e) => {
  if (e.target.id === "cross") {
    const id = e.target.parentElement.id;
    todos = todos.filter((todo) => todo.id != id);
    localStorage.setItem("todos", JSON.stringify(todos));
    e.target.parentElement.remove();
  } else {
    e.target.classList.toggle("cut");
  }
});

// localStorage.setItem("todolist",(["hiiiiiiiiiiiiiiiiiiiii","h2"]));

// localStorage.setItem("todolistobjectStore",JSON.stringify(["hiiiiiiiiiiiiiiiiiiiii","h2"]));

// console.log(localStorage.removeItem("todo"));

// ---------------- Local Storage
