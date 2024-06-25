function fun(str){
  console.log('hiiiiiiiiii');
  // console.log(str[0].toUpperCase()+str.slice(1));
  return str[0].toUpperCase()+str.slice(1);
}

const sol = fun("shubham");  // sol will store the value which is return by the function
console.log(sol);

// types to define function
const fun1 = function(){
  console.log("hiiiiiiiii11111111111");
}
fun1();

const fun2 = (name)=>{
  console.log("hiiiiiiiii2222222");
  return {
    name:fun(name),
  }
}

const fun2returns = fun2("shubham");
console.log(fun2returns.name);


// function returning a function 

function wrapper(name){
  return function(){
    console.log("hello ",name);
  }
}

const insideFun = wrapper("world"); //insideFun will store the function
// to call the function which was return by the wrappper we have to 
// call the variable which is storing the function
console.log(insideFun()); 

var a=2;
console.log(a);