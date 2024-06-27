
let a;
const fun = ()=>{
  console.log(a);
  let b = 5;
  console.log(b);
}

a=2;
fun();

// console.log(b);

let b;
const fun2=()=>{
  let b=5;
  console.log(b+2);
}
fun2();
console.log(b);

{
  let c =3;
  var d =5;
}

console.log(d);


