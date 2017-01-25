'use strict';
var assert = require('assert');
var util = require('..');

describe('test', function () {
    util.BASE_BYTE_PER_SATOSHI = 1;
    
    describe('p2pkh test', function () {
        it('p2pkh fee', function () {
            assert.equal(util.p2pkh_tx_calc_fee(1, 1), 192)
            assert.equal(util.p2pkh_tx_calc_fee(1, 2), 226)
            assert.equal(util.p2pkh_tx_calc_fee(2, 2), 374)
        })
        it('p2pkh byte', function () {
            assert.equal(util.p2pkh_tx_calc_byte(1, 1), 192)
            assert.equal(util.p2pkh_tx_calc_byte(1, 2), 226)
            assert.equal(util.p2pkh_tx_calc_byte(2, 2), 374)
        })
    })
    describe('p2sh test', function () {
        var p2sh_tx_calc_fee_1of1 = util.p2sh_tx_calc_fee_create(1, 1);
        var p2sh_tx_calc_fee_1of2 = util.p2sh_tx_calc_fee_create(1, 2);
        var p2sh_tx_calc_fee_2of3 = util.p2sh_tx_calc_fee_create(2, 3);
        var p2sh_tx_calc_byte_1of1 = util.p2sh_tx_calc_byte_create(1, 1);
        var p2sh_tx_calc_byte_1of2 = util.p2sh_tx_calc_byte_create(1, 2);
        var p2sh_tx_calc_byte_2of3 = util.p2sh_tx_calc_byte_create(2, 3);
        it('p2sh 1 of 1 fee', function () {
            assert.equal(p2sh_tx_calc_fee_1of1(1, 1), 198)
            assert.equal(p2sh_tx_calc_fee_1of1(1, 2), 232)
            assert.equal(p2sh_tx_calc_fee_1of1(2, 2), 386)
        })
        it('p2sh 1 of 1 byte', function () {
            assert.equal(p2sh_tx_calc_byte_1of1(1, 1), 198)
            assert.equal(p2sh_tx_calc_byte_1of1(1, 2), 232)
            assert.equal(p2sh_tx_calc_byte_1of1(2, 2), 386)
        })
        it('p2sh 1 of 2', function () {
            assert.equal(p2sh_tx_calc_fee_1of2(1, 1), 232)
            assert.equal(p2sh_tx_calc_fee_1of2(1, 2), 266)
            assert.equal(p2sh_tx_calc_fee_1of2(2, 2), 454)
        })
        it('p2sh 2 of 3', function () {
            assert.equal(p2sh_tx_calc_fee_2of3(1, 1), 339)
            assert.equal(p2sh_tx_calc_fee_2of3(1, 2), 373)
            assert.equal(p2sh_tx_calc_fee_2of3(2, 2), 668)
            assert.equal(p2sh_tx_calc_fee_2of3(3, 2), 963)
            assert.equal(p2sh_tx_calc_fee_2of3(10, 2), 3028)
        })
    })
})
