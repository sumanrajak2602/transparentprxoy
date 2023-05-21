const { ethers,upgrades } = require("hardhat");

var proxyAddress = "0x51eca880852b77e0331B17a4deb0abfB6E49CbC5";

async function main(){
    console.log("Deploying CrowdFundingV2 contract...");
    const CrowdFundingV2 = await ethers.getContractFactory("CrowdFundingV2");
    const crowdFundingV2 = await upgrades.upgradeProxy(proxyAddress,CrowdFundingV2);
    await crowdFundingV2.deployed();
    console.log("CrowdFundingV2 Proxy Contract ( Must be Same ) deployed to : ",crowdFundingV2.address);
    console.log("CrowdFundingV2 Contract implementation address is : ",await upgrades.erc1967.getImplementationAddress(crowdFundingV2.address));
    console.log("CrowdFundingV2 ProxyAdmin address is  ( Must be Same ) : ",await upgrades.erc1967.getAdminAddress(crowdFundingV2.address));
}

main();