let myBalance = 300;


//Ask for input using a dialog box, then display input in a dialog box -- trying to figure out how/where this comes into play (last slide of Lesson 5), Jeremy mentioned it during office hours

function launchApp() {
  let bankMode = prompt('Please select from the following options: \n W \n D \n B \n Q');
  if (bankMode == 'W') {
    makeWithdrawal();
  } else if (bankMode == 'D') {
    makeDeposit();
  } else if (bankMode == 'B') {
    myBalance();
  // } if (bankMode === 'Q') {
  //   break;
  }
}

function makeWithdrawal() {
  let input = prompt('How much would you like to withdrawal?');
  let result = 0;
  result = myBalance - Number(input);
  myBalance = result;
  alert(result);
}

function makeDeposit() {
  let input = prompt('How much would you like to deposit?');
  let result = 0;
  result = myBalance + Number(input);
  myBalance = result;
  alert(result);
}

function checkBalance() {
  alert(myBalance);
}

//Extra challenges: The additional requirements below are optional. Implement them if you finish the Regular Challenge 1 (above) and are up for more!
  //The user should not be able to make excessive withdrawals (no negative balances).
  //The user should have a deposit cap of $50,000.
  //The user should receive a warning to protect against low balances.
  //Create an alert if the user tries to withdraw an amount that would leave them with less than $300 in their account, asking them to confirm if they're sure.
  //Publish your work to github.io
