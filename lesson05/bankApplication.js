//Q to quit (immediately quits the program)
//let quit;
//function quitApp () {
  //alert('Finished banking');
  //check if user is ready to quit
  //else check if user wants to deposit
  //else check if user wants to withdrawal
  //else check if user wants balance
  //break;

//W to withdrawal. The user will be prompted again to enter an amount to withdraw. After withdrawing money, they should be able to type another option.

let myBalance = 250;

let withdrawal = 0;
let arr = ['$20', '$40', '$60', '$100'];
function myWithdrawal (remove) {
  withdrawal -= remove;
  prompt('Enter withdrawal amount', 'Continue');
}

//D to deposit. The user will be prompted again to enter an amount to deposit. After depositing money, they should be able to type another option.

//let deposit;
//function () {
  //prompt('Enter deposit amount');


//B to balance. The user will see their balance. Afterwards, they should be able to type another option.


function checkBalance() {
  let total = 300;
  let notification;
  if (myBalance < 300) {
    notification = "Low balance";
  } else {
    notification = "Exit application";
  }
  alert(notification);
}


//The program will loop asking for input until the user enters Q.

//for (let i = 0; i < 3; i++) {
  //alert('Finished banking');



//Extra challenges: The additional requirements below are optional. Implement them if you finish the Regular Challenge 1 (above) and are up for more!

  //The user should not be able to make excessive withdrawals (no negative balances).
  //The user should have a deposit cap of $50,000.
  //The user should receive a warning to protect against low balances.
  //Create an alert if the user tries to withdraw an amount that would leave them with less than $300 in their account, asking them to confirm if they're sure.
  //Publish your work to github.io
