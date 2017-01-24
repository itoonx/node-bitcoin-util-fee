'use strict'
var TxFees = exports;

var OPCODE_LEN = 1;
var INT32_LEN = 4;
var INT64_LEN = 8;
var PUBKEY_LEN = 33 + OPCODE_LEN;
var SIG_LEN = 72 + OPCODE_LEN;
var PREVOUT_LEN = 32 + INT32_LEN;
var SEQUENCE_LEN = INT32_LEN;
var AMOUNT_LEN = INT64_LEN;
var LOCKTIME_LEN = INT32_LEN;
var VERSION_LEN = INT32_LEN;
var VARINT8_LEN = 1;
var VARINT16_LEN = 3;
var SCRIPT_PUBKEY_LEN = 20 + (OPCODE_LEN * 5); // DUP HASH160 0x14 [20byte hash] EqualVerify CheckSig
var STATIC_INPUT_P2PKH_LEN = PREVOUT_LEN + VARINT8_LEN + SIG_LEN + PUBKEY_LEN + SEQUENCE_LEN;
var STATIC_INPUT_P2SH_LEN = PREVOUT_LEN + VARINT16_LEN + (OPCODE_LEN * 4) + SEQUENCE_LEN;
var STATIC_OUTPUT_LEN = AMOUNT_LEN + VARINT8_LEN + SCRIPT_PUBKEY_LEN;
var STATIC_HEADER_LEN = VERSION_LEN + VARINT8_LEN + VARINT8_LEN + LOCKTIME_LEN;

TxFees.BASE_BYTE_PER_SATOSHI = 10;

TxFees.get_base_byte_per_satoshi = TxFees.getBaseBytePerSatoshi = function(){ return TxFees.BASE_BYTE_PER_SATOSHI }

TxFees.p2pkh_calc_input_byte = function(){ return STATIC_INPUT_P2PKH_LEN }

TxFees.p2sh_calc_input_byte = function(m, n){
    return (SIG_LEN * m) + (PUBKEY_LEN * n) + STATIC_INPUT_P2SH_LEN
}

TxFees.tx_calc_byte = function(input_byte, input_num, output_num){
    return (input_byte * input_num) + (STATIC_OUTPUT_LEN * output_num) + STATIC_HEADER_LEN
}

TxFees.tx_calc_fee = function(byte, byte_per_satoshi){
    return (byte * byte_per_satoshi)
}

TxFees.p2pkh_tx_calc_fee = function(input_num, output_num){
    return TxFees.tx_calc_fee( TxFees.tx_calc_byte(TxFees.p2pkh_calc_input_byte(), input_num, output_num), TxFees.get_base_byte_per_satoshi() )
}

TxFees.p2sh_tx_calc_fee_create = function(m, n){
    var input_byte = TxFees.p2sh_calc_input_byte(m, n)
    return function(input_num, output_num){
        return TxFees.tx_calc_fee( TxFees.tx_calc_byte(input_byte, input_num, output_num), TxFees.get_base_byte_per_satoshi() )
    }
}
