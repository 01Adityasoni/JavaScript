
// object literal
//An object is a container where you store data in the form:
// key: value pairs
// in object there are key value pairs

const mySym = Symbol("key1");

const JsUser = {
    name: "Aditya",
    "full name": " Aditya Soni",
    [mySym]: "mykey1",//symbol syntax
    email: "aditya@123",
    isLoggedIn: false,
    lastLogginDays:["monday", "tuesday"]
 }

 console.log(JsUser.email);
 console.log(JsUser["full name"]);
 console.log(JsUser[mySym]);// to access symbol type value

JsUser.email = "aditya.soni@123";//updating value
console.log(JsUser.email);

//Object.freeze(JsUser);// freeze the object, no updation or deletion allowed
JsUser.email = "aditya.newemail@123";
console.log(JsUser.email);

JsUser.greeting = function(){
    console.log("Hello JsUser");
}
JsUser.greeting2 = function(){
    console.log(`Hello ${this.name}  Welcome back!`)// this keyword refers to the current object
};

console.log(JsUser.greeting());
console.log(JsUser.greeting2());


// singleton objects

const tinderUser = new Object();// object constructor
tinderUser.name = "Rocky";
tinderUser.age = 22;
tinderUser.isLoggedIn = false;
console.log(tinderUser);

// nested objects
const regularUser = {
    email: "abc@123",
    fullname:{
        userfullname:{
            firstname: "John",
            lastname: "Doe"

        }
    }
}
console.log(regularUser.fullname.userfullname.firstname)

// object assign 
const obj1 = { key1: "value1",
    key2: "value2"
};
const obj2 = { key3: "value3"
};
const newObj = Object.assign({}, obj1, obj2);
console.log(newObj);

//spread operator
const newObj2 = {...obj1, ...obj2};
console.log(newObj2);


const users = [
    {
        userId: 1,
        userName: "aditya"
    },
    {
        userId: 2,
        userName: "harsh"
    }
]
console.log(users[1].userName);

console.log(Object.keys(tinderUser));// to get all keys of object
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));// to get key value pairs as array of arrays

console.log(tinderUser.hasOwnProperty("name"));// to check if object has specific key or not    


