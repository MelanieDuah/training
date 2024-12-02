{
 // code from previous, with deletions of code that is not relevant for final app
 type TransactionType = { description: string; amount: number; date: Date };
  
 const transaction1: TransactionType = {
   description: "deposit",
   amount: 1000,
   date: new Date(),
 };
 
 const transaction2: TransactionType = {
   description: "withdrawal",
   amount: -500,
   date: new Date(),
 };
 
 console.log(transaction1);
 
 const transactions: TransactionType[] = [transaction1, transaction2];
 
 type UserType = { name: string; age: number; loggedIn: boolean };
 const user1: UserType = { name: "Matt", age: 25, loggedIn: false };
 
 const logIn = (): void => {
   user1.loggedIn = true;
   const greetUserEl = document.getElementById("userGreet") as HTMLElement;
   greetUserEl.innerHTML = `<h2>Welcome, ${user1.name}</h2>`;
 };
/*
  // 5) CHALLENGE: ALLOWING USER TO ADD A TRANSACTION //////////////////////////////////////////
// Create a function that when called, adds a new transaction 
//     to the transactions array and logs the updated array 
//       to the console
// HINT: When the user types in an HTML input box,
//  the user's input is stored as a property of the input element.
*/
const addTranasction=():void=>{
    const description:HTMLInputElement=document.getElementById('description') as HTMLInputElement;
    description.value;
    
    const amount : HTMLInputElement=document.getElementById('amount')as HTMLInputElement;
    amount.value;

    const newArray: TransactionType[]=[];
    
}

}