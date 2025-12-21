# Here's what happens behind the scenes when the new keyeord is used:

A new object is created: The new keyword initaites the creation of a new JavaScript Object 

A Prototyle is linked: the newly created object gets linked to the Prototype property of the constructor function . this means that it has access to properties and method defined on the constructors prototype.


The constructor is called: The constructor function is called with the specified Arguments and this is bound to the newly created object. if np exlicit return value is specified from the constructor , JavaScript assumes this  the newly created object , to be the intended return value 


The new object is returned: After the constructor function has been called , if it doesn't return a non-primitive value (object, array, function , etc. ) then newly created object is returned. 


