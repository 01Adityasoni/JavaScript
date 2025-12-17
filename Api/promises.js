/* A Promise is an object that represents a value that will be available in the future.The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
In simple words:
👉 “I promise I will give you the result later.”

This is useful for asynchronous work like:

API calls (fetch data)

Reading files

Database calls

setTimeout

Why do we need Promises?

JavaScript is single-threaded.
If we wait for slow tasks (like API calls), the page will freeze.

Promises help us handle non-blocking code.
Promise States

A Promise has 3 states:

Pending – initial state (still working)

Fulfilled – operation completed successfully

Rejected – operation failed
*/

const promiseOne = new Promise(function(resolve , reject){
    //async work
    // DS calls , newtwork calls , etc
    setTimeout(function(){
        console.log("Async work completed")
        resolve();
    },2000)

})
promiseOne.then(function(){ // .then is directly connected with resolve
    console.log("Promise consumed")
}) 



new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log("Async work 2 completed")
        resolve();
    },2000)
}).then(function(){
    console.log("Promise 2 consumed")
})



const promiseThree = new Promise(function(resolve , reject){
   setTimeout(function(){
    resolve({username : "john_doe" , email : "john_doe@example.com" })
   },2000) 
})
promiseThree.then(function(user){
    console.log("User data received")
    console.log(user)
})


const promiseFour = new Promise(function(resolve , reject){
    setTimeout(function(){
let error = true;
if(!error){
    resolve({username: "Aditya" , product : "Laptop"})
}else{
    reject("Something went wrong")
}
    },2000)
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.username;
})
.then((username)=>{
    console.log(username);
})
.catch(function(error){
    console.log(error);
}).finally(function(){ // this is executed in both cases (resolve and reject)
    console.log("Promise is eather resolved or rejected")

})


const promiseFive = new Promise(function(resolve , reject){
    setTimeout(function(){
 let error = true;
    if(!error){
        resolve({username: "javascript_master" , product : "Smartphone"})
    } else {
        reject("JS went wrong")
    }
    },2000)
})

async function consumePromiseFive(){
    try{
        const response = await promiseFive;
        console.log(response);
    } catch (error){
        console.log(error);
    }
}
consumePromiseFive()
