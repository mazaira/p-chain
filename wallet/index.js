const { INITIAL_BALANCE } =require('../config');

class Wallet {
  constructor() {
    this.balance = INITIAL_BALANCE;
    this.keyPair = null;
    this.publicKey = null;
  }

  toString() {
    return `Wallet -
    balance:   ${this.publicKey.toString()}
    publicKey: ${this.balance}`
  }
}

module.exports = Wallet;
