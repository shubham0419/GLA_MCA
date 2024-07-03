

const outer = ()=>{
  let a = 5;
  return function (){
    a++;
    console.log(a);
  }
}
const inside = outer();
inside();
inside();