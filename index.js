/* Here's a list of features that our code needs to support:

  - Allow multiple accounts to be created
  - Each account can have many transactions
  - Allow withdrawals and deposits into accounts
  - Allow us to retrieve the transaction history of an account (all withdrawals and deposits)
  - Allow us to retrieve the current balance of the account at any time
  - Don't allow withdrawals that exceed the remaining balance of the account */

class Account {

  constructor(username) { // initialise account with these properties
    this.username = username;
    this.balance = 0;
    this.transactions = [0];
  }
}

class Transaction {

  constructor(amount, account) {
    this.amount  = amount;
    this.account = account;
  }

  commit() {
    if (this.account.balance - this.amount < 0 && this.constructor.name === 'Withdrawal') {
      console.log('Transaction Denied!: Insufficient Funds');
    } else {
      this.account.transactions.push(this.value);
      this.account.balance += this.value;
    }
    return `
      Beginning Balance:\t$${this.account.balance - this.value}
      Transaction Type:\t\t${this.constructor.name}
      Transaction Amount:\t$${this.amount}
      Ending balance:\t\t$${this.account.balance}
      `;
  }

}

class Deposit extends Transaction {

  get value() {
    return this.amount;
  }

}

class Withdrawal extends Transaction {

  get value() {

    return -this.amount;
  }

}

// // DRIVER CODE BELOW (Previous)

// const myAccount = new Account('billybob');
// console.log(myAccount);
// // console.log(myAccount.transactions);

// // console.log('Starting Balance:', myAccount.balance);

// // const t1 = new Deposit(120.00, myAccount);
// // t1.commit();
// // console.log(t1)
// // console.log('Current Balance:', myAccount.balance);

// const t2 = new Withdrawal(50.00, myAccount);
// t2.commit();
// console.log(t2);
// console.log('Current Balance:', myAccount.balance);

// console.log('Ending Balance:', myAccount.balance);


// DRIVER CODE (yes, keep everything in one file for now... b/c cog load)
const myAccount = new Account();

console.log('Starting Account Balance: ', myAccount.balance);

console.log('Attempting to withdraw even $1 should fail...');
const t1 = new Withdrawal(1.00, myAccount);
console.log('Commit result:', t1.commit());
console.log('Account Balance: ', myAccount.balance);

console.log('Depositing should succeed...');
const t2 = new Deposit(9.99, myAccount);
console.log('Commit result:', t2.commit());
console.log('Account Balance: ', myAccount.balance);

console.log('Withdrawal for 9.99 should be allowed...');
const t3 = new Withdrawal(9.99, myAccount);
console.log('Commit result:', t3.commit());

console.log('Ending Account Balance: ', myAccount.balance);
console.log("Lookings like I'm broke again");

console.log('Account Transaction History: ', myAccount.transactions);
