'use strict';
var assert = require('assert');
var util = require('..');

describe('test', function () {
    util.BASE_BYTE_PER_SATOSHI = 1;
    
    describe('p2pkh test', function () {
        var getTransactionFees = function(input_num, output_num){
            return util.tx_calc_fee( util.tx_calc_byte(util.p2pkh_calc_input_byte(), input_num, output_num), util.get_base_byte_per_satoshi() )
        }
        it('p2pkh', function () {
            assert.equal(getTransactionFees(1, 1), 192)
            assert.equal(getTransactionFees(1, 2), 226)
            assert.equal(getTransactionFees(2, 2), 374)
        })
    })
    describe('p2sh test', function () {
        var getMultisigTransactionFees = function(input_num, m, n){
            return util.tx_calc_fee( util.tx_calc_byte(util.p2sh_calc_input_byte(m,n), input_num, 1), util.get_base_byte_per_satoshi() )
        }
        it('p2sh 1 of 1', function () {
            assert.equal(getMultisigTransactionFees(1, 1, 1), 198)
        })
        it('p2sh 2 of 3', function () {
            assert.equal(getMultisigTransactionFees(1, 2, 3), 339)
        })
    })
})
