// Get the property descriptor of Math.PI
// This tells us how the property is defined internally
const descriptor = Object.getOwnPropertyDescriptor(Math , 'PI');


// Print the descriptor object to the console
console.log(descriptor);




console.log(Math.PI);
Math.PI = 5;
//Even though you try to change it, JavaScript does not allow modification.beacause writable is false
console.log(Math.PI); // still 3.141592653589793


// Create a normal object
const object = {
    name: 'Rohan',
    age: 25,
    isAvailable: true
}
// Get property descriptor of 'name' property
console.log(Object.getOwnPropertyDescriptor(object , 'name'));

Object.defineProperty(object, 'name', {
    writable: false, // now name property cannot be changed
    enumerable: false, // now name won't appear in for...in loop or Object.keys , Will it appear in loops / Object.keys()?
    configurable: false // now property descriptor can't be changed further Can we delete or redefine it?
}); 


console.log(Object.getOwnPropertyDescriptor(object , 'name'));
object.name = 'Sohan'; // won't change as writable is false
console.log(object.name); // still Rohan

/*
1️⃣ What is a property descriptor in JavaScript?

Answer:
A property descriptor is an object that defines how a property behaves.
It contains value, writable, enumerable, and configurable.

2️⃣ Why can’t we change Math.PI?

Answer:
Because Math.PI has:

writable: false

configurable: false
So it is read-only and protected.

3️⃣ What does Object.getOwnPropertyDescriptor() do?

Answer:
It returns the descriptor object of a property, showing how it is defined internally.

4️⃣ Difference between writable and configurable?

Answer:

writable: controls value change

configurable: controls deletion and redefinition


5️⃣ What happens if enumerable is false?

Answer:
The property:

Does NOT appear in for...in

Does NOT appear in Object.keys()

Still accessible directly (obj.prop)

8️⃣ Are property descriptors used in real projects?

Answer:
Yes ✅
They are used in:

Frameworks

Libraries

Security-related code

Immutable objects


7️⃣ What happens in strict mode if writable is false?

Answer:
JavaScript throws an error instead of failing silently.

6️⃣ When do we use Object.defineProperty()?

Answer:

To make properties read-only

To hide properties

To create secure objects

To control object behavior (frameworks & libraries use this)

*/