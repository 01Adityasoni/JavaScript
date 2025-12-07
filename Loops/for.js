// FOR LOOP 
for(let i = 0; i < 5; i++) {
    console.log("Iteration number: " + i);
}

//  Looping through an array
const fruits = ['Apple', 'Banana', 'Cherry'];
for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}


// nested for loop
for(let i=0; i<=10; i++){
    console.log(`outer loop value: ${i}`);
    for(let j=0; j<=10; j++){
       // console.log(`   inner loop value: ${j} and inner loop ${i}`);
       console.log(i + `*` + j + `=` + (i*j));

    }
}

// break and continue

for(let i=1; i<=20; i++){
    if(i == 5){
        console.log(`detected ${i}`);
        
        break; // exits the loop when i is 5
    }
console.log(`value of i is ${i}`)
}



