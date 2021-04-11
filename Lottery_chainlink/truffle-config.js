const HDWalletProvider = require('@truffle/hdwallet-provider')
require('dotenv').config()

process.env.UV_THREADPOOL_SIZE = 128;
const mnemonic = "unfold entry atom agree antique behind curious between screen parrot three such"
const url = "https://rinkeby.infura.io/v3/65fe2fc1d0cd42e9a4d4bb83f607d9be"

module.exports = {
  networks: {
   
    rinkeby: {
      provider: () => {
        return new HDWalletProvider(mnemonic, url)
      },
      network_id: '4',
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
