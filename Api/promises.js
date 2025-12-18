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

// A Promise means:
// "I will give you a result later (success or error)."

// resolve()  → success
// reject()   → failure
// then()     → runs when resolve() is called
// catch()    → runs when reject() is called
// finally()  → runs in both cases





//Promise One
const promiseOne = new Promise(function(resolve, reject) {
    // A new Promise is created
    // resolve and reject are functions provided by JS

    // This is async work (like API, DB, network)
    setTimeout(function() {
        console.log("Async work completed");

        // resolve() means: task completed successfully
        resolve();
    }, 2000); // runs after 2 seconds
});

// .then() runs ONLY when resolve() is called
promiseOne.then(function() {
    console.log("Promise consumed");
});

//📌 Flow
// Promise starts → pending
// After 2 seconds → resolve() is called
// .then() executes


console.log("..............................................................................................")



//Promise Two 
const promiseTwo =
new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("Async work 2 completed");

        // success
        resolve();
    }, 2000);
})
.then(function() {
    // runs after resolve()
    console.log("Promise 2 consumed");
});
//📌 Same logic, just written in one chain.


console.log("..............................................................................................")   



//Promise Three (resolve with data)
const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function() {

        // resolve() can send data
        resolve({
            username: "john_doe",
            email: "john_doe@example.com"
        });

    }, 2000);
});









// the resolved data comes as a parameter
promiseThree.then(function(user) {
    console.log("User data received");

    // user is the object passed in resolve()
    console.log(user);
});


//resolve(data)  →  then(data)




console.log("..............................................................................................")   



//Promise Four (resolve + reject + chaining)

const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {

        let error = true; // change to false to see success

        if (!error) {
            // success case
            resolve({
                username: "Aditya",
                product: "Laptop"
            });
        } else {
            // failure case
            reject("Something went wrong");
        }

    }, 2000);
});
// consuming the promise
promiseFour
.then((user) => {
    // runs if resolve() is called
    console.log(user);

    // returning value goes to next .then()
    return user.username;
})
.then((username) => {
    // receives returned value
    console.log(username);
})
.catch(function(error) {
    // runs if reject() is called
    console.log(error);
})
.finally(function() {
    // always runs (success or failure)
    console.log("Promise is either resolved or rejected");
});

//📌 Very important chain idea
// resolve(value)
 //→ first then(value)
//→ return something
//→ next then(receivedValue)



console.log("..............................................................................................")   

const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function() {

        let error = true;

        if (!error) {
            resolve({
                username: "javascript_master",
                product: "Smartphone"
            });
        } else {
            reject("JS went wrong");
        }

    }, 2000);
});
// consuming with async / await
async function consumePromiseFive() {
    try {
        // await pauses execution until promise is resolved
        const response = await promiseFive;

        // runs if resolve()
        console.log(response);

    } catch (error) {
        // runs if reject()
        console.log(error);
    }
}

// function call
consumePromiseFive();






/*Promise = order food 🍔

pending   → food is being cooked
fulfilled → food delivered (resolve)
rejected  → restaurant closed (reject)

then()    → eat food
catch()   → complain
finally() → wash hands (always)*/