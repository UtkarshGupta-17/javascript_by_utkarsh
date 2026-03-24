//  const myarr =new Array(1,2,3,4,5)
//  console.log(myarr[0])//on console the array provides prototype and the length of the array
//  //ARRAY METHODS
//  myarr.push(0)// adds element at last
//  console.log(myarr)
//  myarr.pop() // removes element from the last 
//   console.log(myarr)
//   myarr.unshift(8)//adds the element at starting but not prefered as it has to shift the elents to one index
//    console.log(myarr)
//   myarr.shift()//works as pop and remove the starting element 
//    console.log(myarr)
//    // functions like myarr.include give true and false for the element present in the array 
//    //and join function converts array into the string and joins the elements 
//    const newv=myarr.join()
//    console.log(newv)
//    console.log(typeof newv )// array in javascript is shallow i.e the reference is copied not the actual array
//    /*👉 JavaScript arrays are heterogeneous
// → they can store values of different data types at the same time 
// const arr = [1, "hello", true, null, {name: "Utkarsh"}, [1,2,3]]

// console.log(arr)*/
// //slice ,splice

// console.log("A",myarr);
// const mya1=myarr.slice(1,3)

// console.log(mya1)
// console.log("B",myarr);
// const mya2=myarr.splice(1,3) /*
// | Feature        | `slice()`             | `splice()`       |
// | -------------- | --------------------- | ---------------- |
// | Purpose        | Extract part of array | Modify array     |
// | Original array | ❌ Not changed         | ✅ Changed        |
// | Return value   | New array (copy)      | Removed elements |
// | Type           | Non-mutating          | Mutating         |*/

// console.log(mya2)
// console.log(myarr)


/*++++++++++++++++++++++++++++++++++++  ARRAY FUNCTIONNS  ++++++++++++++++++++++++++++++++++++=*/
const sudha=[1,2,3,45]
const utk = [1,6,7,8,9]
const joined=sudha.concat(utk)//mostly used to add only two arrays 
console.log(joined)
const nrr=[...sudha,...utk]// spread operator( for more then two arrays)
console.log(nrr)