'use strict'
var BASE_BYTE_PER_SATOSHI = 10;

var p2sh_calc_input_byte = exports.p2sh_calc_input_byte = function(m, n){
    return (74 * m) + (34 * n) + 49
}

var p2pkh_calc_input_byte = exports.p2pkh_calc_input_byte = function(){
    return 148
}

var tx_calc_byte = exports.tx_calc_byte = function(input_byte, input_num, output_num){
    return (input_byte * input_num) + (34 * output_num) + 10
}

var tx_calc_fee = exports.tx_calc_fee = function(byte, byte_per_satoshi){
    return (byte * byte_per_satoshi)
}

var getBaseBytePerSatoshi = exports.getBaseBytePerSatoshi = function(){ return BASE_BYTE_PER_SATOSHI }

