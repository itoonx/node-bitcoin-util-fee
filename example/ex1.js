'use strict'
const bitcoinfees = require('bitcoinfees-21co');
const util = require('../');

const getCurrentFees = () => bitcoinfees.FeesApi.recommended().then(res => res.fastestFee)

const process = () => {
    const satoshi = util.p2pkh_tx_calc_fee(1, 2)
    console.log("P2PKH fee %d satoshi", satoshi)
}

const main = () => {
    getCurrentFees().then(fee => {
        util.BASE_SATOSHI_PER_BYTE = fee
        process()
    })
}

main();



