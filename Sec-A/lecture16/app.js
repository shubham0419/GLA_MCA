
const query = document.querySelector("#head2");
console.log(query);

const para = document.getElementsByClassName("para");

// console.log(para[0].classList.add("class4"));

// console.log(para[0].classList);

// console.log(para[0].classList.remove("class4"));

// console.log(para[0].classList);

console.log(para[0].classList.toggle("class3"));

console.log(para[1].firstChild);
console.log(para[1].firstChild);

const div = document.createElement("div");
div.setAttribute("id","byDOM");
div.classList.add("para");
div.classList.add("para2");
div.setAttribute("class","bySetAtt");
div.innerText = "created by dom";
console.log(div);
const para2 = document.getElementsByClassName("para2")[0];

for(let i=0;i<4;i++){
  let p = document.createElement("p");
  // p.classList.add("background");
  p.setAttribute("class","background text-color overline");
  p.innerText= `created by DOM ${i}` ;
  div.prepend(p);
}
para2.before(div);
para2.after(div);





