const HDWalletProvider = require('@truffle/hdwallet-provider')
require('dotenv').config()

process.env.UV_THREADPOOL_SIZE = 128;
const mnemonic = process.env.MNEMONIC
const url = process.env.RPC_URL

module.exports = {
  networks: {
    cldev: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*',
    },
    ganache: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '*',
    },
    kovan: {
      provider: () => {
        return new HDWalletProvider(mnemonic, url)
      },
      network_id: '42',
      networkCheckTimeout: 999999,
      skipDryRun: true
    },
  },
  compilers: {
    solc: {
      version: '0.6.6',
    },
  },
}
