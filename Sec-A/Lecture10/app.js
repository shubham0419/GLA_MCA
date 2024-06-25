

const obj = {
  name:"shubham",
  phone:8376850331,
}

// console.log(obj);
console.log(obj.name);
console.log(obj["phone"]);

obj.name = "no name";
console.log(obj.name);



// loops

const arr = [1,2,3,4,56,78,9];
console.log('object');


// let i=0;
// while(i<arr.length){
//   console.log(arr[i]);
//   i++;
// }

// for(let i=0;i<arr.length;i++){
//   console.log(arr[i]);
// }

// for(let element of arr){
//   console.log(element);
// }


// for(let key in arr){
//   console.log(arr[key]);
// }

console.log(("-------------------"));

for(let key in obj){
  console.log(obj[key])
}

