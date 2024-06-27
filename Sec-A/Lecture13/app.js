let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log("orignal", arr);

const twice = (element) => {
  return element * 2;
};
let mapArr = arr.map((ele) => twice(ele));

// let mapArr = arr.map((ele)=>{
//   return ele*2;
// });

// let mapArr = arr.map((ele)=>ele*2);

console.log("mapArr", mapArr);

const fil = (ele) => {
  return ele % 2;
};

let filterArr = arr.filter((ele) => fil(ele));
// let filterArr = arr.filter((ele)=>{
//   return ele%2==0;
// })

console.log("filter Arr", filterArr);

const arrSum = arr.reduce((accum, ele) => accum + ele, 0);
console.log(arrSum);

const Users = [
  {
    _id: 1,
    name: "random1",
    age: 23,
    phone: 9999999999,
  },
  {
    _id: 2,
    name: "random2",
    age: 22,
    phone: 9999999999,
  },
  {
    _id: 3,
    name: "random3",
    age: 23,
    phone: 9999999999,
  },
  {
    _id: 4,
    name: "random4",
    age: 22,
    phone: 9999999999,
  },
  {
    _id: 5,
    name: "random5",
    age: 23,
    phone: 9999999999,
  },
];

const foundUser = Users.find((user)=>user._id == 3);

foundUser.name = "Shubham";
// Users.save();  its a dataBase function
console.log(foundUser);

const quesn = ["user 1 gla","user 2 ","user 3 ","user 4 gla",
  "user 5 gla","user 6 ","user 7 gla","user 8",];

const ans = quesn.filter((user)=>{
  return !user.includes("gla");
}) 

console.log(ans);