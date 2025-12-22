// call method

//👉 call() invokes a function immediately and explicitly sets the value of this.
//call() lets you run a function and decide what this should point to.
//this depends on how a function is called
//With call(), you manually set this


// This is a normal function (NOT a constructor by itself)
function SetUserName(username){
    // complax DB call
      // this.username means:
       // "add a property called username to the object that 'this' refers to"
    this.username = username

    
    // just to check when this function runs
    console.log("called");
    
}


// This is a constructor function
function createUser(username , email , password){
     // VERY IMPORTANT LINE 👇
    // SetUserName.call(this, username)
    //
    // call() does 2 things here:
    // 1. It runs the SetUserName function
    // 2. It sets 'this' inside SetUserName
    //
    // Here, 'this' refers to the NEW object created by createUser
    //
    // So inside SetUserName:
    // this.username = username
    // becomes:
    // userObject.username = username
    SetUserName.call(this, username)
  
    // add email property to the same object
    this.email = email

    
    // add password property to the same object
    this.password = password
}



// new keyword does 4 things:
// 1. Creates an empty object {}
// 2. Sets 'this' to that object
// 3. Runs createUser function
// 4. Returns the object
const user1 = new createUser("john_doe" , "john@fb.com", "123")


// prints the final object
console.log(user1)


/*
Why not just write this.username = username directly?

In real projects:
You may want reuse logic
SetUserName might have:
validation
DB calls
logging
call() lets you reuse that function and still control this




What happens step-by-step when this runs
const user1 = new createUser(...)
Step 1: new creates an empty object
{}
Step 2: this inside createUser points to that object
Step 3: This line runs
SetUserName.call(this, username)
So internally it becomes:
this.username = "john_doe"
Step 4: These lines run
this.email = "john@fb.com"
this.password = "123"
Final object:
{
  username: "john_doe",
  email: "john@fb.com",
  password: "123"
}*/