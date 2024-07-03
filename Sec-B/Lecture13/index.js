let arr = [1,2,3,4,5,6,7,8,9];

let sum = arr.reduce((accum,ele)=>accum+ele,0);
// console.log(sum);
// let sumAdder = 0

// for(let ele of arr){
//   sumAdder+= ele;
// }

let aar = [
  {
    name:"shubham",
    phone:9999999999
  },
  {
    name:"no name",
    phone:99888888888
  },
  {
    name:"yes name",
    phone:77777777777
  },
  {
    name:"ok nAME",
    phone:66666666666
  },
  {
    name:"_________",
    phone:55555555555
  },
  {
    name:"-----------",
    phone:333333333333
  },
]

let foundObj = aar.find((ele)=>ele.phone==77777777777);

// console.log(foundObj);

foundObj.name = "changed";
// it will chwnge the object/element inside aar(initial array)
// console.log(aar);

// if single retun statement in function
const twice = (num)=>2*num;

// --------------------- PROMISE ------------------------------

setTimeout(() => {
  console.log("object");
}, 2000);

let time = new Date().getTime();

console.log("before");
while(new Date().getTime()<time+5000){  }

console.log("after");