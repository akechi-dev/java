const accountId = 123 	//reserves unchangable space in storage 	
let accountEmail = "miku@gmail.com" //reserves changable space in storage
var accpassword = "12345"			//let but universal scope for the variable 
Accountage = "0days"		//doable and works but bad 
let accountstate ; //becomes undefined and is stated as such :O

/* 
prefer not to use var , because of issue in block scope and functional scope 
*/
//accountId = 2 //not allowed 

accountEmail = "teto@gmail.com"
accpassword = "54321"
Accountage = "1days"


console.log(accountId)
console.table([accountId,accpassword,accountEmail,Accountage,accountstate]) //use of table to print multiple variables at once 
