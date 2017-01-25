'use strict'
const bitcoinfees = require('bitcoinfees-21co');
const util = require('../');

const getCurrentFees = () => bitcoinfees.FeesApi.recommended().then(res => res.fastestFee)

const process = () => {
    const p2sh_tx_calc_fee_2of3 = util.p2sh_tx_calc_fee_create(2, 3);
    const satoshi = p2sh_tx_calc_fee_2of3(1, 2)
    console.log("2of3 multisig fee %s satoshi", satoshi)
}

const main = () => {
    getCurrentFees().then(fee => {
        util.BASE_SATOSHI_PER_BYTE = fee
        process()
    })
}

main();


