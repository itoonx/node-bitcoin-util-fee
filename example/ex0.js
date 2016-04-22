'use strict'
const util = require('../');
const MIN_FEE = 10000;

const getBaseTransactionFees = input_num => Math.max(util.tx_calc_fee( util.tx_calc_byte(util.p2pkh_calc_input_byte(), input_num, 1), util.getBaseBytePerSatoshi() ), MIN_FEE)

console.log(getBaseTransactionFees(1))


