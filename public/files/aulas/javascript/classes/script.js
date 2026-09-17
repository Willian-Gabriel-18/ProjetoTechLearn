// Aula: Classes. Bancada: Console.
// Tente: deposite só em a e logue a.saldo e b.saldo — duas gavetas.
//
// class = molde. constructor roda no new.
// this.saldo é o saldo DESTA conta, não de todas.

class Conta {
  constructor(saldo) {
    this.saldo = saldo
  }
  depositar(n) {
    this.saldo = this.saldo + n
  }
}

const a = new Conta(10)
const b = new Conta(0)
a.depositar(5)
console.log(a.saldo, b.saldo) // 15 e 0 — duas gavetas
