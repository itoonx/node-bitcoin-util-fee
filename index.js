'use strict'

var TxFees = exports;

TxFees.BASE_BYTE_PER_SATOSHI = 10;

TxFees.p2sh_calc_input_byte = function(m, n){
    return (74 * m) + (34 * n) + 49
}

TxFees.p2pkh_calc_input_byte = function(){
    return 148
}

TxFees.tx_calc_byte = function(input_byte, input_num, output_num){
    return (input_byte * input_num) + (34 * output_num) + 10
}

TxFees.tx_calc_fee = function(byte, byte_per_satoshi){
    return (byte * byte_per_satoshi)
}

TxFees.getBaseBytePerSatoshi = function(){ return TxFees.BASE_BYTE_PER_SATOSHI }

