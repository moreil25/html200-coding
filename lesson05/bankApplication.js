//The program will loop asking for input until the user enters Q.
//Q to quit (immediately quits the program)
//let quit;
//function quitApp () {
  //alert('Finished banking');
  //check if user is ready to quit
  //else check if user wants to deposit
  //else check if user wants to withdrawal
  //else check if user wants balance
  //break;
  //for (let i = 0; i < 4; i++) {
    //alert(OUTER LOOP);
    //for (let j = 0; j < 3; j++);
      //alert(INNER LOOP);
    //}

// for (let i = 300; i < 305; i++) {
//   console.log(i);
//   if ( i === 303) break;
// }
let myBalance = 300;
// for (myBalance < 300; myBalance < 305; myBalance++) {
//   if (myBalance === 303) break;
  //alert('Low balance');
//}

let bankMode = launchApp;

function launchApp() {
  let input = prompt('Please select from the following options: \n W \n D \n B \n Q');
  alert(input);
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
