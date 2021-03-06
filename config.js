const PRICE_SCALE = 100000000

const networks = {
  local: {
    name: 'local',
    desc: 'Local network',
    contract: 'dex',

    baseToken: {
      contract: 'eosio.token',
      symbol: 'EOS',
      precision: 4
    },
    marketCreationFee: '3.0000 EOS',

    chainId: 'cf057bbfb72640471fd910bcb67639c22df9f92470936cddc1ade0e2f2e7dc4f',
    host: 'localhost',
    port: 8888,
    protocol: 'http',
    monitor: 'http://jungle.bloks.io',
    monitor_params: '',
    lightapi: 'https://lightapi.eosgeneva.io',
    hyperion: 'https://api.eossweden.org/v2/',
    backEnd: 'http://localhost:8000/api/'
  },

  jungle: {
    name: 'jungle',
    desc: 'Jungle testnet',
    contract: 'eostokensdex',

    baseToken: {
      contract: 'eosio.token',
      symbol: 'EOS',
      precision: 4
    },
    marketCreationFee: '3.0000 EOS',

    chainId: 'e70aaab8997e1dfce58fbfac80cbbb8fecec7b99cf982a9444273cbc64c41473',
    host: 'api.jungle.alohaeos.com',
    port: 443,
    protocol: 'https',
    monitor: 'http://jungle.bloks.io',
    monitor_params: '',
    lightapi: 'https://lightapi.eosgeneva.io',
    hyperion: 'http://api.jungle.hyperion.greeneosio.com/v2/',
    backEnd: 'http://localhost:8000/api/'
  },

  eos: {
    name: 'eos',
    desc: 'EOS mainnet',
    contract: 'eostokensdex',

    baseToken: {
      contract: 'eosio.token',
      symbol: 'EOS',
      precision: 4
    },
    marketCreationFee: '3.0000 EOS',

    chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',

    host: 'api.main.alohaeos.com',
    port: 443,
    protocol: 'https',
    monitor: 'http://bloks.io',
    monitor_params: '',
    lightapi: 'https://api.light.xeos.me',
    hyperion: 'https://api.eossweden.org/v2/',
    backEnd: 'https://eostokens.io/api/'
  },

  coffe: {
    name: 'coffe',
    desc: 'COFFE mainnet',
    contract: 'eostokensdex',

    baseToken: {
      contract: 'eosio.token',
      symbol: 'CFF',
      precision: 4
    },
    marketCreationFee: '20.0000 CFF',

    chainId: '1ca925bc8fbc1cec262dedd10fd19d9357a1cc8de0bd92e5b61577740af9a3f2',

    host: 'coffe.io',
    port: 8888,
    protocol: 'https',
    monitor: 'http://local.bloks.io',
    monitor_params: 'nodeUrl=coffe.io:8888&coreSymbol=CFF&systemDomain=eosio&hyperionUrl=https://resurces.com:17555',
    lightapi: 'http://coffe.io:5001',
    hyperion: 'https://resurces.com:17555/v2/',
    backEnd: 'https://eostokens.io/api/'
  },

  telos: {
    name: 'telos',
    desc: 'Telos mainnet',
    contract: 'eostokensdex',

    baseToken: {
      contract: 'eosio.token',
      symbol: 'TLOS',
      precision: 4
    },
    marketCreationFee: '100.0000 TLOS',

    chainId: '4667b205c6838ef70ff7988f6e8257e8be0e1284a2f59699054a018f743b1d11',

    host: 'api.telos.alohaeos.com',
    port: 443,
    protocol: 'https',
    monitor: 'http://telos.bloks.io',
    monitor_params: '',
    lightapi: 'https://api.light.xeos.me',
    hyperion: 'https://mainnet.telosusa.io/v2/',
    backEnd: 'https://eostokens.io/api/'
  },

  wax: {
    name: 'wax',
    desc: 'Wax mainnet',
    contract: 'alcordexmain', // TODO

    baseToken: {
      contract: 'eosio.token',
      symbol: 'WAX',
      precision: 8
    },

    marketCreationFee: '300.00000000 WAX',

    chainId: '1064487b3cd1a897ce03ae5b6a865651747e2e152090f99c1d19d44e01aea5a4',

    host: 'chain.wax.io',
    port: 443,
    protocol: 'https',
    monitor: 'http://wax.bloks.io',
    monitor_params: '',
    lightapi: 'https://lightapi.eosamsterdam.net',
    hyperion: 'https://api.waxsweden.org/v2/',
    backEnd: 'https://eostokens.io/api/'
  }
}

module.exports = {
  APP_NAME: 'Alcor Exchange',
  PRICE_SCALE,
  PRICE_DIGITS: PRICE_SCALE.toString().length - 1,

  networks
}
