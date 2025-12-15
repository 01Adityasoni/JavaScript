/*
An event is something that happens on a web page.

Examples:

User clicks a button

User types in an input box

Page loads

Mouse moves

Key is pressed

JavaScript can listen to these actions and run code when they happen.

Common JavaScript events

Event	    When it happens
click	    User clicks something
dblclick	User double-clicks
mouseover	Mouse goes over an element
mouseout	Mouse leaves an element
keydown	    Key is pressed
keyup	    Key is released
change	    Value changes (input/select)
submit	    Form is submitted
load	    Page is fully loaded
*/



//  document.getElementById("river").onclick = function(){ // method 1 
    //    alert("This is river image");
    //}


    
    // attachEvent() // old method mostly used in Internet Explorer 
    // jQuery // library method


        // imp points to learn about event object
    // 1. event type
    // 2. event target  
    // 3. preventDefault()
    // 4. event timestamp
    // 5. source element
    // 6. client position , clientX , clientY
    // 7. screen position , screenX , screenY
    // 8. altKey , ctrlKey , shiftKey , keyCode 
    // 10 . these all are the properties of event object . available in  browser console prototype



    document.getElementById('river').addEventListener('click',function(e){ // method 2 and recommended
        console.log(e)
        alert("This is river image"); 
    }, false) // false means event bubbling it is default , true means event capturing
    // bubbling means event propagating from child to parent , bydefault it is false meaning bubbling
    // capturing means event propagating from parent to child , if we set it as true then first parent event will be triggered then child event will be triggered 
    
    document.getElementById('images').addEventListener('click',function(e){
        //alert("clicked inside ul");
        console.log("clicked inside ul ") 
    }, false)
    document.getElementById('mountain').addEventListener('click',function(e){
        //alert("mountain clicked");
        console.log("mountain clicked") 
        e.stopPropagation(); // to stop event bubbling or capturing
    }, false)


// prevent Default stops the browsers default action , it does not stop event bubbling or capturing , it only stops what the browser normally does 
   
document.getElementById('google').addEventListener('click',function(e){
    alert("You clicked on google link");
    e.preventDefault(); // it will stop the default action of browser to open the link 
}, false)






/// task  when we click on image then image should be invisible

// document.querySelector('#images').addEventListener('click',function(e){
  //  console.log(e.target.parentNode) // it will give the parent node of the target element
    // let removeIt = e.target.parentNode;
   // removeIt.remove(); // it will remove the entire li which contains the image
  // removeIt.parentNode.removeChild(removeIt); // it will remove the li from ul
 // }) // here the issue is when we click on ul list area the all the images will be removed because the event is attached to ul so to avoid this we will use condition

document.querySelector('#images').addEventListener('click',function(e){
    if(e.target.tagName === 'IMG'){ // to check whether the clicked target is image or not
        console.log(e.target.parentNode) // it will give the parent node of the target element
        let removeIt = e.target.parentNode;
       // removeIt.remove(); // it will remove the entire li which contains the image
       removeIt.parentNode.removeChild(removeIt); // it will remove the li from ul
    }
})




