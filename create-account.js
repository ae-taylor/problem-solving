"use strict";

class Account {
  constructor(pin, amount=0) {
    this.pin = pin;
    this.amount = amount;
  }

  checkBalance(pin) {
    if (pin === this.pin) {
      return `$${this.amount}`;
    } else {
      return "Invalid PIN."
    }
  }

  deposit(pin, depAmount) {
    if (pin === this.pin) {
      this.amount = this.amount + depAmount;
      return `Successfully deposited $${depAmount}. Current balance: $${this.amount}.`
    } else {
      return "Invalid PIN."
    }
  }

  withdraw(pin, withdrawAmount) {
    if (pin === this.pin) {
      if (withdrawAmount > this.amount) {
       return "Withdrawal amount exceeds account balance. Transaction cancelled."
      }
      this.amount = this.amount - withdrawAmount;
      return `Successfully withdrew $${withdrawAmount}. Current balance: $${this.amount}.`
    } else {
      return "Invalid PIN."
    }
  }

  changePin(pin, newPin) {
    if (pin === this.pin) {
      this.pin = newPin;
      return "PIN successfully changed!"
    } else {
      return "Invalid PIN."
    }
  }

  }


function createAccount(pin, amount) {
  return new Account(pin, amount)
}

module.exports = { createAccount };
