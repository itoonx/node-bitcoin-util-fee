'use strict'
const bitcoinfees = require('bitcoinfees-21co');
const util = require('../');
const MIN_FEE = 10000;

const getCurrentFees = () => bitcoinfees.FeesApi.recommended().then(res => res.hourFee)

const getTransactionFees = input_num => getCurrentFees().then( satoshi =>
    Math.max(util.tx_calc_fee( util.tx_calc_byte(util.p2pkh_calc_input_byte(), input_num, 1), satoshi ), MIN_FEE)
)

getTransactionFees(1).then(console.log)


