// map function

let arr1 = [23, 45, 67, 54]

function square (ele) { return ele*ele };
let squred = arr1.map(square) 


// for in loop 

for (let num in arr1){  console.log(arr1[num])   }


// for of loop

for (let num of arr1) {  console.log(num)  }


// splice

// with only start index
arr1.splice(1);

// with start and delete count
arr1.splice(1, 2)

//with start, delete count, items to be inserted
arr1.splice(1, 1, 2, 3, 4)

//slice
// with no index
arr1.slice()

// with start index
arr1.slice(1);

// with start and end index
arr1.slice(1, 3);

// pop, push

// pop - remove from end

arr1.pop()

// push - push at end 

arr1.push(3)

// shift, unshift


// shift - remove from start

arr1.shift()

// unshift - push at star 

arr1.unshift(3)


// Objects in JS

// how to create object 

// with object literal 

let newobj = {};

// with object constructor

let newobj1 = new Object();


// inserting keys and values

newobj = { a: 4, b: 5   };

// accessing keys using dot and square bracket operator

newobj.a;

newobj["a"];

// storage of objects

// Objects are stored in the heap memory.....

// comparin two objects

newobj1 = newobj;

newobj === newobj1; // returns true as they have same reference

//deleting keys

delete newobj.a;



// iterating on an object

// for in loop
for (let key in newobj) {
    console.log(newobj[key])
}

// 