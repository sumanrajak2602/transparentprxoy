const { ethers, upgrades } = require("hardhat");

async function main(){
    console.log("Deploying CrowdFundingV1 contract...");
    const CrowdFundingV1 = await ethers.getContractFactory("CrowdFundingV1");
    const crowdFundingV1 = await upgrades.deployProxy(CrowdFundingV1);
    await crowdFundingV1.deployed();
    console.log("CrowdFundingV1 Proxy Contract deployed to : ",crowdFundingV1.address);
    console.log("CrowdFundingV1 Contract implementation address is : ",await upgrades.erc1967.getImplementationAddress(crowdFundingV1.address));
    console.log("CrowdFundingV1 ProxyAdmin address is : ",await upgrades.erc1967.getAdminAddress(crowdFundingV1.address));
}

main();