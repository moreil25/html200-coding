let myBalance = 400;

function launchApp() {
  let bankMode = prompt('Please enter one of the following options: \n W to Withdrawal \n D to Deposit \n B to Balance  \n Q to Quit');
  firstInput = bankMode;
  while (firstInput == 'Q') {
    return;
  }

  if (firstInput == 'W') {
    makeWithdrawal()
  } else if (firstInput == 'D') {
    makeDeposit();
  } else if (firstInput == 'B') {
    checkBalance();
  } else if (firstInput !== 'W', 'B', 'D', 'Q') {
    alert('Incorrect option');
  }
}

function makeWithdrawal() {
  let input = prompt('How much would you like to withdrawal?');
  let result = 0;
  result = myBalance - Number(input);
  myBalance = result;
  alert('Your balance is' + ' $' + result);
  launchApp();
}

function makeDeposit() {
  let input = prompt('How much would you like to deposit?');
  let result = 0;
  result = myBalance + Number(input);
  myBalance = result;
  alert('Your balance is' + ' $' + result);
  launchApp();
}

function checkBalance() {
  alert('Your balance is' + ' $' + myBalance);
  launchApp();
}
