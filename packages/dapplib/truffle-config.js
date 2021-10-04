require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy knock forward turtle crazy rifle six pull install opinion slot general'; 
let testAccounts = [
"0x5cba68b0ba2377cfdc738958ceb72c65ff09f72b51491379bf084f20c534d494",
"0x9646b082f6d23730f5afcdd5b74dbc9dc42777be912d2a2524f685b52e11b298",
"0xda33ab5836a973258fbda843ac33b3aa66f0117ab722a5ffac004696fef9720c",
"0x1919ba605e8ece138c0b2b597f8669061a4e0a39c8c2bb640796d875a1b8c0fb",
"0x41d97085b0a9da26dc899ca1f38290b08788093cea38bdbee5904e0addf90994",
"0xd1ae7fee953fc715bb2b0993974fedaf16357d810c0c79a8588e8558a24a6c7e",
"0x1528c61b330cc43e54eedf13667075c6015aab3eff54d6f66b5a530061462433",
"0xfee29d5b4995b1c5bdb17ea46bdd4f9788a004ab08f082ced2c971aa483b9990",
"0x5a8e77ef8be8d58c5242d717d0400c3c1c119fa250efa04b411310c372c15c28",
"0x18a89b090c94c297114924a3ab98b1e31a5c9aed9ff209e3202a8a919bcdfeca"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

