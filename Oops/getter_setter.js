// Define a class named User
class User {
    // Constructor runs when we create a new object using 'new'
    constructor(name , password) {
          // This does NOT directly store name
        // It actually calls the setter 'name(value)'
        this.name = name; 
        
        // This calls the setter 'password(value)' 
        this.password = password;    
}

    // Getter for name
    // Runs when we access: aditya.name
get name(){
     // Return name in uppercase
        // _name is a private-like convention (not truly private)
    return this._name.toUpperCase();
}

 // Return name in uppercase
        // _name is a private-like convention (not truly private)
set name(value){
      // Store the value in _name
    this._name = value;
}

  // Getter for password
    // Runs when we access: aditya.password
get password(){
      // Add extra text to password
        // This hides the real password value
    return `${this._password}aditya`;
}


    // Setter for password
set password(value){
    // Store the password internally
    this._password = value;
}
}
// Create a new object of User class
const aditya = new User("Aditya", "abc");
// Calls the getter for name
console.log(aditya.name);  // Accessing name directly
// Calls the getter for password
console.log(aditya.password);  // Accessing password directly


/*What happens internally:

Constructor runs

this.name = "Aditya" → calls setter

this.password = "abc" → calls setter

👉 Output:

abcaditya


Why?

Getter modifies the value before returning


Very important concept (must understand)

⚠️ Never do this inside getter/setter:

get name() {
    return this.name; // ❌ infinite loop
}


Why?

this.name again calls the getter

Infinite recursion → crash

✅ Correct way:

this._name

📌 Why _name and _password?

JavaScript does NOT have true private fields (older JS)

_ is a convention

Means: “Don’t touch this directly”

(Modern JS has #name, but this is still very common)

🎯 Interview Questions & Answers
1️⃣ What are getters and setters?

Answer:
Getters and setters are special methods that allow us to control how a property is read and written.

2️⃣ Why use getters and setters?

Answer:

Data validation

Data hiding

Modify value before returning

Encapsulation

3️⃣ Is aditya.name a function call?

Answer:
No ❌
It looks like a property, but internally it calls the getter function.

4️⃣ Why do we use _name instead of name?

Answer:
To avoid infinite recursion and to separate internal storage from exposed property.

5️⃣ Can we make a property read-only using getter?

Answer:
Yes ✅
By defining only getter and no setter.

get name() {
  return this._name;
}

6️⃣ Are getters part of property descriptors?

Answer:
Yes ✅
They are called accessor descriptors (get & set).

7️⃣ Difference between data descriptor and accessor descriptor?
Data Descriptor	Accessor Descriptor
value, writable	get, set
Stores value	Controls access
Simple data	Computed logic
8️⃣ Real-world use of getters/setters?

Answer:

Password masking

Logging access

Validation

Frameworks (Angular, Vue, React state logic)

9️⃣ Does JavaScript really have private properties?

Answer:
Older JS ❌ (only conventions like _name)
Modern JS ✅ using #name



*/
