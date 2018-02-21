const Blockchain = require('./models/blockchain')
const Transaction = require('./models/transaction')

let fakeCoin = new Blockchain()

fakeCoin.createTransaction(new Transaction('address1', 'address2', 100))
fakeCoin.createTransaction(new Transaction('address2', 'address1', 50))

console.log('\nStarting the miner...')
fakeCoin.minePendingTransactions('miner-address')

console.log('\nBalance of \'miner-address\' is', fakeCoin.getBalanceOfAddress('miner-address'))

console.log('\nBalance of \'address1\' is', fakeCoin.getBalanceOfAddress('address1'))
console.log('\nBalance of \'address2\' is', fakeCoin.getBalanceOfAddress('address2'))

console.log('\nStarting the miner...')
fakeCoin.minePendingTransactions('miner-address')

console.log('\nBalance of \'miner-address\' is', fakeCoin.getBalanceOfAddress('miner-address'))
