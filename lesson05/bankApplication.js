  //for (let i = 0; i < 4; i++) {
    //alert(OUTER LOOP);
    //for (let j = 0; j < 3; j++);
      //alert(INNER LOOP);
    //}

let myBalance = 300;
// if (myBalance < 300) {
//   alert('Low balance');
// }

const bankMode = 0;

//Ask for input using a dialog box, then display input in a dialog box
//The launchApp should loop around all the other fucntions within the app

function launchApp() {
  prompt('Please select from the following options: \n W \n D \n B \n Q');
  if ('W') {
    prompt(makeWithdrawal);
  } else if ('D') {
    prompt(makeDeposit);
  } else if ('B') {
    alert(myBalance);
  // } else if ('Q'); {
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
// } if (myBalance < 300) {
//     alert(myBalance + ' ' + 'Low balance');
//   } else if (myBalance >= 300) {
//     prompt('Enter Q to exit application');
}

//Extra challenges: The additional requirements below are optional. Implement them if you finish the Regular Challenge 1 (above) and are up for more!
  //The user should not be able to make excessive withdrawals (no negative balances).
  //The user should have a deposit cap of $50,000.
  //The user should receive a warning to protect against low balances.
  //Create an alert if the user tries to withdraw an amount that would leave them with less than $300 in their account, asking them to confirm if they're sure.
  //Publish your work to github.io
