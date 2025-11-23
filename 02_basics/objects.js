//Singleton 


// object literal
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