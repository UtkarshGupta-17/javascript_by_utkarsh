//singleton 
//Object.create /*(this is a method to create an object using the constructor and the object created will be singleton object)*/
//const tinder =new Object() (is singleton)
//object literals (the object created using this method is not singleton)
const mysym= Symbol("key1")

const jsUser={
    name : "utkarsh",
    "full name":"utkarsh gupta",
    [mysym]: "key1",//if no [] in symbol then it act as string and with [] it cat as symbol 
    age: 18,
    location:"jaipur",
    email:"hi.gmail.com",
    isLoggedin:false
}
// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full name"])   //"." wala syntax key may spaces aane par kam hi nahi karega toh hamesha "[]" wala syntax hi use karo
// console.log(jsUser[mysym])


// jsUser["email"]="utk.email.com"
// console.log(jsUser["email"])
// Object.freeze(jsUser)   // now no change will occur into this object
// jsUser["email"]="utkjj.email.com"   // now there will o no change because of the freeze but no error will occur just nothing will change in the object
// console.log(jsUser["email"])
jsUser.greetings = function(){
    console.log("hello js user");
}
console.log(jsUser.greetings)   // here the o/p is [Function (anonymous)] that is the reference of the function it is not executed
console.log(jsUser.greetings()) 
jsUser.greetings2  = function(){
    console.log(`hello js user, ${this.name}`);}
    console.log(jsUser.greetings2())


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    const regularuser ={
        email: "lal.gmail.com",
        fullname:{
            userfullname :{
                firstname:"utkarsh",
                lastname:"gupta"
            }
        }
    }
    // console.log(regularuser.fullname?.userfullname.firstname)// jab api se response atta hai tab ? wala syntax use hota hai ki agar yeh value present hai toh yeh kariye nahi toh hume if else lagane padenge har jagah
    const obj1={1:"a",2:"b",3:"c"}
     const obj2={4:"a",5:"b",6:"c"}
    //  const obj={obj1,obj2}// normal object adding but not prefered
    //  console.log(obj)
    //  //using object assign
     const target = { a: 1, b: 2 };
    const source = { b: 4, c: 5 };

    const returnedTarget = Object.assign(target, source);// retuurns the  target

    console.log(target);
    // Expected output: Object { a: 1, b: 4, c: 5 }

    console.log(returnedTarget === target);
    // Expected output: true

    const newwwwobj=Object.assign({},obj1,obj2)// as first value is target i.e the new object ic created or added into the target,,, if there is no{ } then the new obj is stored in obj1
    console.log(newwwwobj)
    //the mostly we use separator 
    const newwobj={...obj1,...obj2}
    console.log(newwobj)
    // Object.keys(obj1)//gives the array of keys of object
    // Object.values(obj2)//gives the array of values of object
    // Object.entries(obj1)//gives the array of keys and value pair of object

     const course={
        coursename: "hello",
        courseinstructor:"me"
     }
    //object destructure
    const { courseInstructure : instruct}=course
    console.log(instruct);
