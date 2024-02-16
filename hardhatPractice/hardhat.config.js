require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",

  networks:{
    arbsep:{
      url:"",
      accounts:[],
    }
  },
  etherscan:{
    apiKey:{
      arbsep: ""
    },
    customChains:[
      {
        network: "arbsep",
        chainId: 421614,
        urls:{
          apiURL: "",
          browserURL: ""
        }
      }
    ]
  }
};
