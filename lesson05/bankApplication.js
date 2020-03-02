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

let myBalance = 200;
let total = 0;

  //How many and what variables do I need to pass to this function?
function makeWithdrawal () {
  let input = prompt('How much would you like to withdrawal?');
  let result = 0;
  result = myBalance - input;
  alert(result);
}


//D to deposit. The user will be prompted again to enter an amount to deposit. After depositing money, they should be able to type another option.

//function makeDeposit() {
  //let input = prompt('How much would you like to deposit?');
  //let result = 0;
  //result = myBalance + input;
  //alert(result);


//B to balance. The user will see their balance. Afterwards, they should be able to type another option.

function checkBalance() {
  if (myBalance < 300) {
    notification = "Low balance";
  } else {
    notification = "Exit application";
  }
  alert(notification);
}
//DO I NEED TO USE AN ARRAY HERE? TO STORE AND ACCESS DATA? MULTI-DIMENSIONAL ARRAY?


//The program will loop asking for input until the user enters Q.

//for (let i = 0; i < 4; i++) {
  //alert(SOMETHING/OUTER LOOP);
  //for (let j = 0; j < 3; j++);
    //alert(SOMETHING/INNER LOOP);
  //}


//Extra challenges: The additional requirements below are optional. Implement them if you finish the Regular Challenge 1 (above) and are up for more!

  //The user should not be able to make excessive withdrawals (no negative balances).
  //do {
    //alert ();
    //myBalance++;
    //} while (myBalance >= 0)
  //The user should have a deposit cap of $50,000.
  //The user should receive a warning to protect against low balances.
  //Create an alert if the user tries to withdraw an amount that would leave them with less than $300 in their account, asking them to confirm if they're sure.
  //Publish your work to github.io
