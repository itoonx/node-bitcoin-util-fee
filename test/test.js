'use strict';
var assert = require('assert');
var util = require('..');

describe('test', function () {
    
    describe('p2pkh test', function () {
        var getTransactionFees = function(input_num){
            return util.tx_calc_fee( util.tx_calc_byte(util.p2pkh_calc_input_byte(), input_num, 1), util.getBaseBytePerSatoshi() )
        }
        it('p2pkh', function () {
            assert(getTransactionFees(1) === 1920)
        })
    })
    describe('p2sh test', function () {
        var getMultisigTransactionFees = function(input_num, m, n){
            return util.tx_calc_fee( util.tx_calc_byte(util.p2sh_calc_input_byte(m,n), input_num, 1), util.getBaseBytePerSatoshi() )
        }
        it('p2sh 1 of 1', function () {
            assert(getMultisigTransactionFees(1, 1, 1) === 2010)
        })
        it('p2sh 2 of 3', function () {
            assert(getMultisigTransactionFees(1, 2, 3) === 3430)
        })
    })
})
