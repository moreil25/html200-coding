let myBalance = 300;

function launchApp() {
  let bankMode = prompt('Please select from the following options: \n W \n D \n B \n Q');
  firstInput = bankMode;
  if (firstInput == 'W') {
    makeWithdrawal();
  } else if (firstInput == 'D') {
    makeDeposit();
  } else if (firstInput == 'B') {
    checkBalance();
  }
}

function makeWithdrawal() {
  let input = prompt('How much would you like to withdrawal?');
  let result = 0;
  result = myBalance - Number(input);
  myBalance = result;
  alert('Your balance is' + ' $' + result);
}

function makeDeposit() {
  let input = prompt('How much would you like to deposit?');
  let result = 0;
  result = myBalance + Number(input);
  myBalance = result;
  alert('Your balance is' + ' $' + result);
}

function checkBalance() {
  alert('Your balance is' + ' $' + myBalance);
}
