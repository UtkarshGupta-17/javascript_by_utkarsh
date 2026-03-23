// const balance =400
// console.log(balance)
// const balance2 = new Number (100)
// console.log(balance2)

// console.log(balance.toString().length)
// console.log(balance.toFixed(2))
// const hundreds=1000000
// console.log(hundreds.toLocaleString('en-IN'));
//++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//it is a library given in to the js 
// console.log(Math)//here there is no so much but at chrome console there are more properties 
// console.log(Math.round(4.6));
// console.log(Math.floor(4.6));
// console.log(Math.ceil(4.6));

console.log(Math.random());//prints random value btw 0 and 1
console.log(Math.floor(Math.random()*10)+1);/* range of the random depends ton the number we are multiplying the random with
here +1 is used to avoid the 0 as output as value 0.0 can come and on multipying it with 10 it remains 0 so we add 1 
so yaha par 1 min hoga aur 10 max hoga */
const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1)+ min ));
