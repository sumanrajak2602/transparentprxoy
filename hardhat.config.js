require("@nomiclabs/hardhat-ethers");
require("@openzeppelin/hardhat-upgrades");
require("@nomiclabs/hardhat-etherscan");
require("@nomicfoundation/hardhat-chai-matchers");


module.exports = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/9471f829c27b4c08b04366c86d1b452c`,
      accounts: ['0x4d4681b8692c106b09f915fb5bb1fe82c2e423ab55c01c89a233620dafd62bd0'],
    },
  }
};
