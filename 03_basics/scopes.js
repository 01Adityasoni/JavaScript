let a = 10;

const b = 20;

var c = 30;

console.log(a);
console.log(b);
console.log(c);
 // {} this is called scope 
 if(true){
    let d = 100; // let is  a local scoped means it is only available inside this block,Block-scoped (safe inside { }) , Cannot be redeclared in same block , Can be updated

    const e = 200; // const is also block scoped like let , Cannot be redeclared , Cannot be reassigned (value cannot change)
    var f = 300; // we can use var but it is not recommended to use var now a days because of its function scope , Can be redeclared , can be updated , Not safe — leaks outside blocks
 }

//console.log(d); // d is not defined because d is in block scope
//console.log(e); // e is not defined because e is in block scope
console.log(f); // f is defined because var is function scoped not block scoped

// nested scope   


function one(){ // parent function 
   const username ="john doe";
   console.log(username);

   function two(){ // nested function or child function // child functions are able to access parent function variables
      const website ="youtube";
      console.log(username);
   }
  // console.log(website); // not accessible here because it is in nested function scope
   two();
}
one();

