// // global variable - can be access anywhere in js file
// let a =5;

// {
//   // local variable - can be access only inside that block in which they are created
//   let a=2;
// }


// function outer(cb){
//   console.log("outer");
//   cb();
// }

// function cb(){
//   console.log("call back");
// }
// outer(cb);

// outer(function(){
//   console.log("passing annonymous function without storing it");
// });

// // ------------------------
// const wrapper = ()=>{

//   console.log("wrapper");

//   return function(){
//     console.log("cb function");
//   }
// }

// const cb2 = wrapper();

// cb2();

// ---------------------------------------------------------------------\

let arr = [1,2,3,4,5,6,7,8,9];

const mapArr = arr.map((ele)=>{
  return ele*2;
})

const square = arr.map((ele)=>{
  return ele-2;
})

console.log("orignal",arr);
console.log(mapArr);
console.log(square);

console.log("-------------------------------");
// implimentation of map
const twice = (num)=>{
  return 2*num;
}
const createdMap = (twice,arr)=>{
  let newArr = [];

  for(let ele of arr){
    let newEle = twice(ele);
    newArr.push(newEle);
  }

  return newArr;
}

// console.log(createdMap(twice,arr));

// -----------------------   filter

const filteredArr = arr.filter((ele)=>{
  return ele%2!=0;
})

console.log(filteredArr);


const quesn = ["user 1 gla","user 2 ","user 3 ","user 4 gla",
  "user 5 gla","user 6 ","user 7 gla","user 8",];


const ansArr = quesn.filter((user)=>{
  return !user.includes("gla");
})

console.log(ansArr);