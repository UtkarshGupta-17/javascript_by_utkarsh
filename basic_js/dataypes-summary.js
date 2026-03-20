/* on the basics of how the data is stored and how it can be accessed the datatypes are categorised into two categories 
1-primitive (call by value) (when we call then there copy is called and all changes done in the copy only )
primitive-> String,Number,Boolean,Null,Undefined,symbol,bigint
2-non primitive (refrence type)
non primitive-> array,objects,functions
javascript ic dynamically typed */
const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId);
const myfunction = function(){
    console.log("hello world");
}
console.log(typeof myfunction);//likely to be called 'object function'
/*for null type will be object 
for variable with no value the type will be undefined */


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//Stack(primitive),Heap(non-primitive)
let myname="utkarsh"
let anothername=myname
anothername="lala"
console.log(anothername)
console.log(myname)
// here the copy of myname is given to the anothername so changes in another anme will no affect the my name  
let vair={
    name:"utkarsh",
    email:"goolge.com"

}//object is created in heap and then it's reference is given to the variable vair
let vait=vair
vait.name="lala"
console.log(vait.name)
console.log(vair.name)
// changes done in both because the object is in heap and its reference is given to the variable so changes done in original 