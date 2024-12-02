var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
{
    var transaction = {
        description: 'deposit',
        amount: 2000,
        date: new Date()
    };
    var transaction1 = {
        description: 'withdrawal',
        amount: -500,
        date: new Date()
    };
    //JS
    var numberArray = ['hello', 30];
    var transactions = [transaction, transaction1];
    var transaction2 = [transaction, transaction1];
    var description = transaction.description, amount = transaction.amount, date = transaction.date;
    console.log(transactions);
    var person = {
        name: 'Melanie',
        age: 10,
        loginStatus: true
    };
    var person2 = {
        name: 'Chevy',
        age: 6,
        loginStatus: false
    };
    console.log("".concat(person, ", ").concat(person2));
    console.log("".concat(person.age));
    var users = [person, person2];
    console.log(person[0]);
    console.log(users[1].name);
    //line 63 and 67 all means the same.declaring the varaiables in the object
    var user3 = __assign(__assign({}, person), { age: 35 });
    console.log('---->', user3);
    var name_1 = user3.name, loginStatus = user3.loginStatus;
    console.log('---->', user3.name, user3.loginStatus);
    //the thusername is the new user
    //const{username:thusername,}=user3
    var transactionA = document.getElementById('transaction');
    console.log(transactionA);
    var el1 = "<li>".concat(transaction1.date, ",").concat(transaction1.amount, ",").concat(transaction1.description, "</li>");
    var el2 = "<li>".concat(transaction1.date, ",").concat(transaction1.amount, ",").concat(transaction1.description, "</li>");
    var userArea = document.getElementById('user');
    var person3 = "<p>".concat(person2.name, ",").concat(person2.age, ",").concat(person2.loginStatus, "</p>");
    userArea ? userArea.innerHTML = person3 : "";
    // const userGreat=document.getElementById("user") as HTMLHeadingElement
    // if(person.loginStatus{
    //     userGreat
    // })
    //there 2 are both functions
    function sayHello() {
        console.log('Hello');
    }
    sayHello();
    var sayHelloArrow = function () {
        console.log('Hello');
    };
    sayHelloArrow();
    // console.log(person2);
    var balance_1 = 0;
    var processTransaction = function (transaction) {
        var newBalance = balance_1 + transaction.amount;
        console.log("Ols balance was ".concat(balance_1, ",New balance is").concat(newBalance));
        return newBalance;
    };
    processTransaction(transaction1);
    //const afterTransaction:string=processTransaction(transaction1);
    var userClick = function (person) {
        var newUser = person.loginStatus;
        console.log(newUser);
        return newUser;
    };
    userClick(person);
}
