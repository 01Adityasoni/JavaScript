let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate)// date is a object 

let myCreatedDate = new Date(2025 , 0 , 22); // index of month starts from 0 in js 
console.log(myCreatedDate.toString());

let myCreatedDate2 = new Date("2025-02-22")
console.log(myCreatedDate2.toLocaleString())

let myCreatedDate3 = new Date("01-14-2025")
console.log(myCreatedDate3.toLocaleString())


let myTimeStamp = Date.now()
console.log(myTimeStamp)// in milliseconds since 1970 jan 1
console.log(myCreatedDate.getTime())// in milliseconds since 1970 jan 1

console.log(Math.floor(Date.now()/1000)) // milliseconds to second conversion

let newDate = new Date();
console.log(newDate.getMonth()+1)
console.log(newDate.getDay())



newDate.toLocaleString('default',{
    weekday: "long",
})
// js always work in milliseconds and it take time from 1970 jan 1