
const h1 = document.getElementById("head");
const paras = document.getElementsByClassName("para");

// console.log(h1,paras);

const byQuery = document.querySelectorAll(".para");
// console.log(byQuery[1].childNodes[0]);

// console.log(byQuery[0].classList);
byQuery[0].classList.add("newClass");
console.log(byQuery[0].classList);

byQuery[0].classList.remove("class2")
console.log(byQuery[0].classList);

byQuery[0].classList.toggle("class2");
byQuery[0].classList.toggle("newClass");

console.log(byQuery[0].classList);

console.log(h1.getAttribute("id"));

console.log(byQuery[0].getAttribute("class"));

console.log(h1.setAttribute("class","class2 class3 para"));
console.log(h1);

// ------------------- element create
