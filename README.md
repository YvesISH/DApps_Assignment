# ERC-20 Token DApp

   This project is a simple ERC-20 token smart contract, deployed on the Ethereum blockchain, along with a frontend decentralized application (DApp) that allows users to interact with the token contract. The DApp enables users to check balances, transfer tokens, and connect their wallets to the Ethereum network.

## Testing the DApp
### Connect Wallet

   Open your frontend (index.html) in a browser.
   Click "Connect Wallet" to link your MetaMask account.
   Check Balance

   Enter an address in the "Check Balance" field.
   Click "Check Balance" and verify the result.
   Transfer Tokens

   Enter a recipient address and amount in the transfer fields.
   Click "Transfer" and confirm the transaction in MetaMask.
   Check the balance to confirm that tokens were transferred.


## Screenshots and Visuals
   ./assets

### Deployment on MetaMask
   This image shows the contract being deployed on MetaMask, indicating the successful interaction between the smart contract and the Ethereum blockchain.
### MetaMask Successful Deployment
   This screenshot captures the MetaMask confirmation screen after the contract deployment, confirming that the deployment was successful.
### Landing Page
   This is a view of the DApp's landing page, providing the user interface for interacting with the ERC-20 token contract.
### Connecting to the Contract
  This image shows the UI when connecting to the Ethereum contract via MetaMask, allowing the user to interact with the deployed token contract.
### Successful Token Transfer
  This screenshot highlights the successful transfer of tokens between users, confirming the transaction via the DApp's user interface.



### Features

  ERC-20 Token Standard Compliance: The smart contract follows the ERC-20 standard, implementing functions such as transfer, balanceOf, and totalSupply.

  Wallet Integration: Users can connect their MetaMask wallet to interact with the smart contract.

  Token Transfer: Users can transfer tokens to any valid Ethereum address.

  Balance Check: Users can check the token balance of any Ethereum address.



### Prerequisites

##### Node.js: Make sure you have Node.js installed (https://nodejs.org/).
##### Truffle Suite: Truffle is required to compile, deploy, and test the smart contract (https://trufflesuite.com/).
##### MetaMask: For interacting with the DApp, you'll need the MetaMask browser extension (https://metamask.io/).



### Technologies Used

##### Solidity: 
    For writing the ERC-20 smart contract.

##### Truffle: 
    Development environment for smart contracts.

##### JavaScript: 
    For the frontend of the DApp.

##### MetaMask: 
    Wallet integration for Ethereum interaction.


### Installation

##### Clone the Repository:
    git clone https://github.com/your-username/ERC20-Token-DApp.git

##### Install Dependencies:
    npm install

##### Compile the Smart Contract:
    truffle compile

##### Deploy the Smart Contract:
    Deploy the smart contract to a local blockchain (e.g., Ganache) or a testnet (e.g., Rinkeby).

truffle migrate --network <network_name>

##### Update Frontend with Contract Address:
    After deployment, update the contractAddress variable in the frontend's JavaScript file (src/myToken.test.js) with your contract’s deployed address.



### Usage


#### Run the Local Server:

##### Start a server to host the frontend of the DApp.
    npm start


##### Open the DApp in Browser:
    Open http://localhost:3000 to access the DApp interface.

##### Connect MetaMask:
    Connect your MetaMask wallet by clicking the Connect Wallet button.

##### Interact with the Token:
    Check Balance: Enter an Ethereum address to view the token balance.

##### Transfer Tokens: 
    Enter the recipient address and the amount to transfer tokens.
