# node-bitcoin-fee-util

## 手数料の求め方

ビットコインの手数料はトランザクションの送信バイト数によって決まる  

送信バイト数は以下の要因によって増加する

* 送金に使用する未使用トランザクションの数
* マルチシグであれば鍵の数、署名の数
* 混雑状況

## 例：P2PKH

一つの入力から一つの出力のパターン

```
var util = require('../');
var getBaseTransactionFees = function(input_num){
    return util.tx_calc_fee(
        util.tx_calc_byte(util.p2pkh_calc_input_byte(), input_num, 1),
        util.getBaseBytePerSatoshi()
    )
}
console.log(getBaseTransactionFees(1))
```

## 例：P2SH

一つの入力から一つの出力のパターン

```
var util = require('../');
var KEY_NUM = 3; // 鍵の数
var KEY_SIGN_NUM = 2; // 署名の数
var getBaseTransactionFees = function(m, n, input_num){
    return util.tx_calc_fee(
        util.tx_calc_byte(util.p2sh_calc_input_byte(m,n), input_num, 1),
        util.getBaseBytePerSatoshi()
    )
}
console.log(getBaseTransactionFees(KEY_SIGN_NUM, KEY_NUM, 1))
```

## ネットワークの混雑状況から最適な手数料を得る

21.coが混雑状況に合わせた手数料レートをAPI公開しているのでそれを使う

```
'use strict'
const bitcoinfees = require('bitcoinfees-21co');
const util = require('../');
const MIN_FEE = 10000;

const getCurrentFees = () => bitcoinfees.FeesApi.recommended().then(res => res.hourFee)

const getTransactionFees = input_num => getCurrentFees().then( satoshi =>
    Math.max(util.tx_calc_fee( util.tx_calc_byte(util.p2pkh_calc_input_byte(), input_num, 1), satoshi ), MIN_FEE)
)

getTransactionFees(1).then(console.log)
```




