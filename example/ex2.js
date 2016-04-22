'use strict'
const util = require('../');
const MIN_FEE = 10000;

const getMultisigTransactionFees = (input_num, m, n) => util.getCurrentBytePerSatoshi().then( satoshi =>
    Math.max(util.tx_calc_fee( util.tx_calc_byte(util.p2sh_calc_input_byte(m,n), input_num, 1), satoshi ), MIN_FEE)
)

getMultisigTransactionFees(2,3,1).then(console.log)


