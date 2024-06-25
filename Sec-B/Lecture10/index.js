function fun(){
  console.log("hello world");
}

fun();

const fun2 = function(){
  console.log("hii 2");
}

fun2();
// arrow function
const fun3 = () => {
  console.log("hiiiiiiiii 3");
}

fun3();

// parameters

function normal(param1,param2){
  console.log("normal ",param1+param2);
}

normal(5,6);

const arrow = (param1,param2)=>{
  console.log("arrow ",param1+param2);
}

arrow(1,2);

// return in function

const newFun = (name)=>{
  return {
    username:name[0].toUpperCase()+name.slice(1)
  }
}

let ans = newFun("hiiiiiiii");
console.log(ans.username);

const outer = (name)=>{
  return function(){
    console.log(name[0].toUpperCase()+name.slice(1));
  }
}

const outerResult = outer("shubham");

console.log(outer("shubham"));

