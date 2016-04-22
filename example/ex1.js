'use strict'
const util = require('../');
const MIN_FEE = 10000;

const getTransactionFees = input_num => util.getCurrentBytePerSatoshi().then( satoshi =>
    Math.max(util.tx_calc_fee( util.tx_calc_byte(util.p2pkh_calc_input_byte(), input_num, 1), satoshi ), MIN_FEE)
)

getTransactionFees(1).then(console.log)


