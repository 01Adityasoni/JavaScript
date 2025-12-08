// FOR OF LOOP 

const arr = [1,2,3,4,5,6];
for (const i of arr){
    console.log(i);
}

const str = "Hello World";
for(const char of str){
    console.log(`each char is ${char}`);
}

// MAPS .. map is a collection of key value pairs and it is a object it only stores unique values as keys 

const map = new Map();
map.set(`IN` , "India");
map.set(`US` , "United States");
map.set(`UK` , "United Kingdom");
console.log(map);

for(const key of map){
    console.log(key);   
}

for(const [key] of map){
    console.log(key);   // only printing keys
}
for(const [key,value] of map){
    console.log(`key is ${key} and value is ${value}`);  // destructuring  
}


//const myObj = {
 //   name : "John",
   // age : 30,
    //city : "New York"
//};

//for(const key of myObj){
  //  console.log(`key is ${key} and value is ${myObj[key]}`); // this will give error as objects are not iterable
//}


// FOR IN LOOP 
 
const myobj = {
    js: `JavaScript`,
    py: `Python`,
    rb: `Ruby`,
    cpp: `C++`
}

for(const key in myobj){
    console.log(`key is ${key}`);
}
for(const key in myobj){
    console.log(`key is ${key} and value is ${myobj[key]}`);
}


// for in loop with arrays
const myarr = ['a', 'b', 'c', 'd', 'e'];

for(const index in myarr){
    console.log(`index is ${index} and value is ${myarr[index]}`);
}

// for in loop with strings
const mystring = "Hello";
for(const index in mystring){
    console.log(`index is ${index} and char is ${mystring[index]}`);
}



/// FOR EACH LOOP 

const array = [10,20,30,40,50];
array.forEach(function(item) {
    console.log(item);
})

const brr = ['x', 'y', 'z'];
brr.forEach( (item) => {
    console.log(item);
})


// for each with objects inside array
const myCoading = [
    {
        name : "JavaScript",
        difficulty : "Hard"
    },
    {
        name : "Python",
        difficulty : "Easy"
    },
    {
        name : "Ruby",
        difficulty : "Medium"
    }   
]

myCoading.forEach( (item) => {
    console.log(`Language is ${item.name} and difficulty is ${item.difficulty}`);
})