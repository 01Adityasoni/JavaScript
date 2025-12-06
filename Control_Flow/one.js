// if statement 

//if(condition == true){
  //  console.log("Condition is true"); // if the condition is true, this line will execute . if it is false, it will be skipped
//}



//const score = 200
//if(score > 100){
  //  const power = "fly"
    //console.log(`You have the power to ${power}`); // Output: You have the power to fly
//}

  // console.log(`You have the power to ${power}`); // This will cause an error because 'power' is not defined in this scope



  //SHORT HAND NOTATION
  //const balance = 1000
  //if(balance > 500) console.log("You are rich"); // Output: You are rich

  // nesting if statements

  //if(balance < 500){
    //console.log("less than 500")
  //}else if(balance < 750){
    //console.log("medium balance")
  //}else if(balance < 900){
    //console.log("high balance")
  //}
  //else{
    //console.log("very high balance")
  //}



  const userLogedIn = true
  const debitCard = true
  const loggedInFromGoogle = false
  const loggedInFromEmail = true

  if(userLogedIn && debitCard){ // && both consitions should be true
    console.log("You can make a purchase"); 
  }
  if(loggedInFromEmail || loggedInFromGoogle){// || either one condition should be true
    console.log(`user logged in`);
  }

  


  


