document.addEventListener('DOMContentLoaded', function () {
    const connectWalletButton = document.getElementById('connectWallet');
    const mintButton = document.getElementById('submitButton');

    // Function to switch to the Goerli testnet
    async function switchToGoerli() {
        try {
            await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: '0xaa36a7' }], // Chain ID for Sepolia Testnet is 0xaa36a7
            });
        } catch (switchError) {
            // This error code indicates that the chain has not been added to MetaMask
            if (switchError.code === 4902) {
                try {
                    await window.ethereum.request({
                        method: 'wallet_addEthereumChain',
                        params: [{
                            chainId: '0xaa36a7',
                            rpcUrl: 'https://sepolia.infura.io/v3/6166faa9a2614cf8a6b4f1a1301c4a98', // Replace YOUR_PROJECT_ID with your actual Infura Project ID
                            chainName: 'Sepolia Test Network',
                            nativeCurrency: {
                                name: 'ETH',
                                symbol: 'ETH', // 2-6 characters long
                                decimals: 18,
                            },
                            blockExplorerUrls: ['https://sepolia.etherscan.io/']
                        }],
                    });
                } catch (addError) {
                    // Handle error while adding Goerli network
                    console.error('Failed to add the Sepolia network', addError);
                }
            }
            console.error('Failed to switch to the Sepolia network', switchError);
        }
    }

    // Function to handle wallet connection and network switch
    async function connectAndSwitchNetwork() {
        if (window.ethereum) { // Check if MetaMask is installed
            try {
                await window.ethereum.request({ method: 'eth_requestAccounts' }); // Request account access
                await switchToGoerli(); // Switch to Goerli Testnet
                connectWalletButton.innerText = 'Wallet Connected';
            } catch (error) {
                console.error('An error occurred:', error);
            }
        } else {
            console.log('Please install MetaMask!');
        }
    }

    // Add event listener to the connect wallet button
    connectWalletButton.addEventListener('click', connectAndSwitchNetwork);
});