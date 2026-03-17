console.log(2>0)
console.log(2==0)
console.log(2>=0)
/*jab bhi hum do value with same datatype compare karte hai toh loi dikkat nahi hoti*/
console.log("2">0)//js tries to convert string into numbers 
console.log("2" > "10"); // true 😳

/*👉 Why?

Both are strings → lexicographic comparison

"2" comes after "1" → true
here js pics each character of both strings and then checks them according to dictionary order
*/
console.log(null==0)
console.log(null>=0)
console.log(null<0)
/*yaha par hume pata nahi ki kab js null ko nan bana raha hai aur kab 0 toh comparision galat ho sakta hai*/
console.log(undefined>0)
console.log(undefined<0)
console.log(undefined==0)

