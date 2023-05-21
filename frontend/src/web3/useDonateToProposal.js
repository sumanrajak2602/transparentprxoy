import { ethers } from "ethers";


import contractAddresses from "./map.json";
import crowdfundingAbi from "../../../artifacts/contracts/CrowdFundingV2.sol/CrowdFundingV2.json";

export function useDonateToProposal() {
  async function donate(id, signer, value) {
    try {
      const proxyContract = contractAddresses["5"]["UpgradeableProxy"][0];
      const crowdfunding = crowdfundingAbi.abi;

      const crowdfundingInstance = new ethers.Contract(
        proxyContract,
        crowdfunding,
        signer
      );

      const proposetx = await crowdfundingInstance.donateToCampaign(id, {
        value: value,
      });

      const transactionReceipt = await proposetx.wait(1);
    } catch (err) {
      console.log(err);
    }
  }

  return { donate };
}
