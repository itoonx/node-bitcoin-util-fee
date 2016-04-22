'use strict'
const util = require('../');
const MIN_FEE = 10000;
const KEY_NUM = 3;
const KEY_SIGN_NUM = 2;

const getMultisigTransactionFees = (input_num, m, n) => util.getCurrentBytePerSatoshi().then( satoshi =>
    Math.max(util.tx_calc_fee( util.tx_calc_byte(util.p2sh_calc_input_byte(m,n), input_num, 1), satoshi ), MIN_FEE)
)

getMultisigTransactionFees(1, KEY_SIGN_NUM, KEY_NUM).then(console.log)


