// class é um molde. constructor roda na hora do new.
// this.saldo é o saldo desta conta, não de todas.

class Conta {
  constructor(saldo) {
    this.saldo = saldo
  }
  depositar(n) {
    this.saldo = this.saldo + n
  }
}

const c = new Conta(10)
c.depositar(5)
console.log(c.saldo)
