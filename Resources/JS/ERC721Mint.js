document.addEventListener('DOMContentLoaded', function() {
  const submitButton = document.getElementById('submitButton');
  let web3;
  let nftContract;

  // Your smart contract's ABI and address on the Goerli testnet
  const contractABI = [{"inputs":[{"internalType":"uint256","name":"_unlockTime","type":"uint256"}],"stateMutability":"payable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"when","type":"uint256"}],"name":"Withdrawal","type":"event"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"unlockTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}];
  const contractAddress = '0x3A93824e0e15227380e31EfC255754fa326e10ef';

  // Function to initialize web3 and ensure connection to Goerli
  async function initWeb3() {
      if (window.ethereum) {
          web3 = new Web3(window.ethereum);
          try {
              // Request account access
              await window.ethereum.enable();
              const networkId = await web3.eth.net.getId();
              const goerliNetworkId = 5; // Network ID for Goerli is 5
              if (networkId !== goerliNetworkId) {
                  alert("Please connect to the Goerli Testnet.");
                  return;
              }
              // Instantiate the contract
              nftContract = new web3.eth.Contract(contractABI, contractAddress);
          } catch (error) {
              console.error("User denied account access or error occurred:", error);
          }
      } else {
          console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
      }
  }

  // Function to mint NFT
  async function mintNFT() {
      const accounts = await web3.eth.getAccounts();
      if (accounts.length === 0) {
          console.log('Please connect to MetaMask.');
          return;
      }

      // Assuming your mint function is called mintNFT and does not require any arguments
      // You might need to adjust this call based on your smart contract's function signature
      nftContract.methods.mintNFT().send({ from: accounts[0] })
          .on('transactionHash', function(hash){
              console.log('Transaction hash:', hash);
          })
          .on('receipt', function(receipt){
              console.log('Minted NFT. Contract address:', receipt.contractAddress);
          })
          .on('error', function(error, receipt) {
              console.log('Error minting NFT:', error);
          });
  }

  // Event listener for the button
  submitButton.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the form from submitting
      mintNFT();
  });

  // Initialize web3 when the page loads
  initWeb3();
});
