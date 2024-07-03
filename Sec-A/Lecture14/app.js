
// console.log("first");

// const time = new Date().getTime();

// // while(new Date().getTime() < time+5000);

// setTimeout(()=>{console.log("after 5s")},5000);
// setTimeout(()=>{console.log('secont after 5s')},5000);

// console.log("second");


function fun1(){
  setTimeout(()=>console.log("time gap"),2000);
  console.log("inside fun");
}

function fun2(fun){
  console.log("inside fun2");
  fun();
  console.log("second");
}

// fun2(fun1);

// --------------------------- Promise ---------------------------

const prm = new Promise((resolve,reject)=>{
  const num = Math.random()*10;

  if(num<5){
    return resolve(num);
  }
  return reject(num);
});

prm
.then((num)=>{console.log('solved',num)})
.catch((num)=>console.log("reject",num))