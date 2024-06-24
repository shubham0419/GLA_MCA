const obj = {
  name:"shubham",
  number:8376850331,
}

console.log(obj)// print whole object
console.log(obj.name); // print the value of a perticular key

console.log(obj);console.log(obj.name); //can't use two statement in a single line without ending(;) first

obj.name = "changed";  // changing value of key

console.log(obj.name);

console.log("=> ",obj["number"],"multiple");
// ------------------------------- LOOPS -----------------------------

let arr = [1,2,3,4,5,6,7,8];

// let i=0;

// while(i<arr.length){
//   console.log(arr[i]);
//   i++;
// }

// for(let i=0;i<arr.length;i++){
//   console.log(arr[i]);
// }

// for(let item of arr){
//   console.log(item);
// }

console.log("-----------------");

for (const key in obj) {
  console.log(key,"->",obj[key]);
}

// obj is only iterable with forin
for(let item of obj){  
  console.log(item);
}