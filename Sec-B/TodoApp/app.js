const form = document.getElementById("form");
const container = document.getElementById("container");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target.children[0].value);
  if (e.target.children[0].value.length > 0) {
    const todo = `<div id="todo"> ${e.target.children[0].value}
    <span id="cross">x</span>
    </div>`;
    container.innerHTML += todo;
    e.target.children[0].value = "";
  }
});

container.addEventListener("click",(e)=>{
  if(e.target.id==="cross"){
    e.target.parentElement.remove();
  }else{
    e.target.classList.toggle("cut");
  }
})

localStorage.setItem("todo","hiiiiiiiiiiiiiiiiiiiii");

console.log(localStorage.getItem("todo"));