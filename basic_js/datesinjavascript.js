/*JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects 
encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).*/
// let myDate = new Date();
// console.log(myDate.toString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toTimeString())
// console.log(myDate.toUTCString())
// date is an object i.e its type is object 
let mydate=new Date(2023,9,3)//months in js starts from 0
console.log(mydate.toDateString())// the output geets the week by (Total days passed since a reference date % 7 → weekday)