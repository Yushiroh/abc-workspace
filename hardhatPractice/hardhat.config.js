require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",

  networks:{
    arbsep:{
      url:"https://arb-sepolia.g.alchemy.com/v2/B0tuod1EcfnHMgAQRWfW5EezJOkVkP8G",
      accounts:["3e620912cc910301623cbf4fa6559b442736d087c80ee7711c2b76aa97d11511"],
    }
  },
  etherscan:{
    apiKey:{
      arbsep: "7JZNQAZQDJZPBAC6YQYCFURXBZIACH6VG3"
    },
    customChains:[
      {
        network: "arbsep",
        chainId: 421614,
        urls:{
          apiURL: "https://api-sepolia.arbiscan.io/api",
          browserURL: "https://sepolia.arbiscan.io/"
        }
      }
    ]
  }
};
