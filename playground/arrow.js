 var square=(x)=> x*x;
console.log(square(8));
 var user={
   name:"Himanshu",
   sayHi:()=>{
   	console.log(arguments);
   	console.log(`Hi ${this.name}`); 
   },
   sayHiAlt () {
   	console.log(arguments);
   	console.log(`Hi ${this.name}`); 
   }
 };
 user.sayHi(1,2,3,4);
 user.sayHiAlt(1,2,3);