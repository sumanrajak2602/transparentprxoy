For deployment of Version 1 of crowdfuncting smart contract, use  command<br />
"npx hardhat run scripts/1_deploy_logic.js --network sepolia"


For deployment of Version 2(updated) of crowdfuncting smart contract, use  command<br />
"npx hardhat run scripts/2_deploy_logicv2.js --network sepolia"


If deploying again, then please change the proxy_address inside the scripts -> 2_deploy_logicv2.js <br />
Right now, it is proxyAddress = "0x51eca880852b77e0331B17a4deb0abfB6E49CbC5";


-------------------------------------------------------------------------

For uploading the image, moralis services are used.<br />
cd backend<br />
node test.js<br />

Keep the above server running on port 8000

-------------------------------------------------------------------------


Go to frontend folder ->src -> web3 -> map.json<br />
Already deployed contract adrresses are.<br />
  "CrowdFundingV2":["0x51eca880852b77e0331B17a4deb0abfB6E49CbC5"]<br />
  "ProxyAdmin":["0xFa3Cf7a4635b84DfEb9927eA1d7bf0851F638E9f"]<br />
  "UpgradeableProxy":["0xB88AD67E17b76809711A7A3a2D3206aA2aF632c7"]<br />

If deploying a fresh one, then change these addresses accordingly<br />

then run the command "npm run dev" inside frontend folder.
