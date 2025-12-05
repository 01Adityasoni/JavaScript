//IIFE (Immediately Invoked Function Expression)

//An IIFE (Immediately Invoked Function Expression) is an idiom in which a JavaScript function runs as soon as it is defined. It is also known as a self-executing anonymous function.
 // WHY IIFE IS USED?
    // 1. To avoid polluting global scope 
    // 2. To create a private scope for variables
    // 3. To execute code immediately and once




function hero(){
 console.log(`I am Iron Man`);
}
hero(); // Normal function invocation

// IIFE FUNCTION INVOCATION

(function mafia(){ // IT IS A NAMED IIFE FUNCTION
    console.log(`I am Batman`);
})(); // IN IIFE FUNCTION INVOCATION WE HAVE TO ADD EXTRA PARENTHESIS AT THE END TO INVOKE THE FUNCTION SPECIALLY IN THIS CASE WHICH SHOWS THE FUNCTION IS ENDED

// IIFE SYNTAX 

 //   () FIRST PARENTHESIS HOLDS THE FUNCTION DEFINITION , () SECOND PARENTHESIS INVOKES THE FUNCTION OR CALL THE FUNCTION


 // ANOTHER EXAMPLE OF IIFE
 (()=>{// ANONYMOUS IIFE FUNCTION
    console.log(`I am Spiderman`);
 })();

 // ANOTHER EXAMPLE OF IIFE WITH PARAMETERS
 ( (name) => {// PARAMETERIZED IIFE
    console.log(`I am ${name}`);
 })(`Thor`);


