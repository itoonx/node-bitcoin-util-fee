# node-bitcoin-fee-util

[![NPM](https://nodei.co/npm/bitcoin-util-fee.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/bitcoin-util-fee)  
[![Build Status](https://secure.travis-ci.org/you21979/node-bitcoin-util-fee.png?branch=master)](https://travis-ci.org/you21979/node-bitcoin-util-fee)
[![Coverage Status](https://coveralls.io/repos/github/you21979/node-bitcoin-util-fee/badge.svg?branch=master)](https://coveralls.io/github/you21979/node-bitcoin-util-fee?branch=master)

## install

```
npm i bitcoin-util-fee
```

## simple transaction-fee calculate usage

please install [bitcoinfees-21co](https://www.npmjs.com/package/bitcoinfees-21co)

```
npm i bitcoinfees-21co
```


### P2PKH

```
'use strict'
const bitcoinfees = require('bitcoinfees-21co');
const feeutil = require('bitcoin-util-fee');

const getCurrentFees = () =>
    bitcoinfees.FeesApi.recommended().then(res => res.fastestFee)

const process = () => {
    const number_of_input = 1;
    const number_of_output = 2;
    const satoshi = feeutil.p2pkh_tx_calc_fee(number_of_input, number_of_output)
    console.log("P2PKH fee %d satoshi", satoshi)
}

getCurrentFees().then(fee => {
    feeutil.BASE_BYTE_PER_SATOSHI = fee; // initialize satoshi/byte rate
    process()
})
```

### P2SH n-of-m multisig


```
'use strict'
const bitcoinfees = require('bitcoinfees-21co');
const feeutil = require('bitcoin-fee-util');

const getCurrentFees = () =>
    bitcoinfees.FeesApi.recommended().then(res => res.fastestFee)

const process = () => {
    const number_of_input = 1;
    const number_of_output = 2;
    const p2sh_tx_calc_fee_2of3 = feeutil.p2sh_tx_calc_fee_create(2, 3);
    const satoshi = p2sh_tx_calc_fee_2of3(number_of_input, number_of_output)
    console.log("2of3 multisig fee %s satoshi", satoshi)
}

getCurrentFees().then(fee => {
    feeutil.BASE_BYTE_PER_SATOSHI = fee; // initialize satoshi/byte rate
    process()
})
```

## LICENSE

MIT LICENSE


