{
//define your type
//when you add a ? to a define type that means optional
type TransactionType={
    description?:string,
    amount:number,
    date:Date
}


const transaction:TransactionType={
    description:'deposit',
    amount:2000,
    date:new Date()
}

const transaction1:TransactionType={
    description:'withdrawal',
    amount:-500,
    date:new Date()
}
//JS
const numberArray: (number |string)[] =['hello',30];

const transactions:TransactionType[]=[transaction,transaction1];
const transaction2:Array<TransactionType>=[transaction,transaction1];
const {description,amount,date}=transaction

console.log(transactions);


// type TransactionType1={
//     description:string,
//     amount:number
// }
// const t1:TransactionType1=transaction1;

type user={
    name:string,
    age:number,
    loginStatus:boolean
}

const person:user={
    name:'Melanie',
    age:10,
    loginStatus:true

}

const person2:user={
    name:'Chevy',
    age:6,
    loginStatus:false

}
console.log(`${person}, ${person2}`);
console.log( `${person.age}`);

const users:user[]=[person,person2]
console.log(person[0]);
console.log(users[1].name);

//line 63 and 67 all means the same.declaring the varaiables in the object
const user3:user={...person,age:35};

console.log('---->',user3);

 const{name,loginStatus}=user3
console.log('---->',user3.name,user3.loginStatus);

//the thusername is the new user
//const{username:thusername,}=user3

}