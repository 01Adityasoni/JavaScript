// FOR OF LOOP 
 // for of loop with arrays
const arr = [1,2,3,4,5,6];
for (const i of arr){
    console.log(i);
}
// for of loop with strings
const str = "Hello World";
for(const char of str){
    console.log(`each char is ${char}`);
}




// MAPS .. map is a collection of key value pairs and it is a object it only stores unique values as keys 
// for of loop with maps
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
  //  console.log(`key is ${key} and value is ${myObj[key]}`); // this will give error as objects are not iterable using for of loop
//}












// FOR IN LOOP 

// for in loop with objects
 
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
// for each with arrays
const array = [10,20,30,40,50];
array.forEach(function(item) {
    console.log(item);
})

const brr = ['x', 'y', 'z'];
brr.forEach( (item) => {
    console.log(item);
})


// for each with strings .. not possible as strings are not arrays


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





// for each loop does not return anything
const numbers = [1,2,3,4,5];
const result = numbers.forEach( (num) => {
    return num * 2;
}); // this will return undefined

console.log(result); // undefined  

//filter method
const myNums = [1,2,3,4,5,6,7,8,9,10];
const newNums = myNums.filter( (item) => item > 4);
console.log(newNums); // [5,6,7,8,9,10]

// filter using for each
const filteredNums = [];
myNums.forEach( (item) => {
    if(item > 4){
        filteredNums.push(item);
    }
});
console.log(filteredNums); // [5,6,7,8,9,10]




const books = [
    { title: 'Book one' , genre: 'Fiction', publish: 1981, edition: 2003 },
    { title: 'Book two' , genre: 'Non-Fiction', publish: 1992, edition: 2001 },
    { title: 'Book three' , genre: 'History', publish: 1999, edition: 2005 },
    { title: 'Book four' , genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book five' , genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book six' , genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book seven' , genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book eight' , genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book nine' , genre: 'Non-Fiction', publish: 1981, edition: 1989 },
    { title: 'Book ten' , genre: 'Science', publish: 1995, edition: 2000 },
]


const userBooks = books.filter( (bookElement) => bookElement.genre === 'Science')// filtering books with genre Science
console.log(userBooks); // books with genre Science 

console.log("----------------------UserBook----------------------------");


let publishedBooks = books.filter( (bookElement) => bookElement.publish >= 1995)// filtering books published after 1995
console.log(publishedBooks); // books published after 1995

console.log("--------------------------------------------------");

publishedBooks = books.filter( (bookElement) => bookElement.publish >= 2005 && bookElement.genre === 'Science')// filtering books with edition after 2005
console.log(publishedBooks); // books with edition after 2005 and genre Science


// map method

const myVal = [1,2,3,4,5,6,7,8,9,10]
const newVal = myVal.map( (item) => item+10);
console.log(newVal); // [11,12,13,14,15,16,17,18,19,20]


//chaining 
// example of chaining map and filter. 
const newNum = myVal
.map( (item) => item * 2 )
.map( (item) => item + 10 )
.filter( (item) => item > 20 );

console.log(newNum); // [22,24]






// reduce method

const values = [1,2,3,4,5];
const sum = values.reduce(function (accumulator , currentValue) {
    console.log(`accumulator is ${accumulator} and currentValue is ${currentValue} and sum is ${accumulator + currentValue}`);
    return accumulator + currentValue;
} , 0); // 0 is the initial value of accumulator

console.log(`Sum is ${sum}`); // Sum is 15


const ShoppingCart = [
    { product : "Laptop" , price : 50000 },
    { product : "Phone" , price : 20000 },
    { product : "Tablet" , price : 15000 },
    { product : "Monitor" , price : 10000 }
];

const totalAmount = ShoppingCart.reduce((acc,item) => acc + item.price,0);

console.log(`Total Amount is ${totalAmount}`); // Total Amount is 95000


