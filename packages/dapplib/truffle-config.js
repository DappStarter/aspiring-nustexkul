require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture oppose bottom tooth notice crime remember solid inflict permit fun stuff'; 
let testAccounts = [
"0x1d754fa4fe30bfb1fe15f09ed4aff911ce0d8ef01f65fc6243943f0befffd1f5",
"0x225d3805264e6e0cb6a12209eeb58a14fc0960e26f057b9230392bf301cb03e9",
"0xa5cb9ea886bd5d030f680b690431a069019662c8dd6a8d7ee69294ccb3fd4bd8",
"0x241b4cabd3b27b6e6cf2356276eabff22124c014e4b06d4585cb2343ef7ddc77",
"0xba0c56d8b2e664ee6d74f1ccdf80213d02387fa4688be7579f0bfde0aa1fc8ae",
"0xd178fabf45e09de1194f5be080d085475d8bb349893892ed56dfbbbaf051dd81",
"0xb50823c5d24a645b30cc2b19923c95d045debd0c150393d113371d497d83ac88",
"0xbd36ba171e5ad3895bcfa5ac2f310f4fdf12ac617a1e3a79ea053099d8e73cbb",
"0x1caf3b0c3c10fd058813a00c6bb969ad3d2ee8f0b8907fb0ec1548bd3de8324a",
"0x7ded6f76dec71bed8b0567077643c4fe7cd5afc22341bdaa0bec10ed173d277c"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
