let myBalance = 400;


while (function launchApp() {
  let bankMode = prompt('Please enter one of the following options: \n W to Withdrawal \n D to Deposit \n B to Balance  \n Q to Quit');
  firstInput = bankMode;
  if (firstInput == 'W') {
    makeWithdrawal();
  } else if (firstInput == 'D') {
    makeDeposit();
  } else if (firstInput == 'B') {
    checkBalance();
  }
}) {
do (//SOMETHING TO BREAK THE LOOP AND QUIT)
}

function makeWithdrawal() {
  let input = prompt('How much would you like to withdrawal?');
  let result = 0;
  result = myBalance - Number(input);
  myBalance = result;
  alert('Your balance is' + ' $' + result);
  prompt(launchApp());
}

function makeDeposit() {
  let input = prompt('How much would you like to deposit?');
  let result = 0;
  result = myBalance + Number(input);
  myBalance = result;
  alert('Your balance is' + ' $' + result);
  prompt(launchApp());
}

function checkBalance() {
  alert('Your balance is' + ' $' + myBalance);
  prompt(launchApp());
}
