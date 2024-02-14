// app.js
document.addEventListener('DOMContentLoaded', () => {
    const connectButton = document.getElementById('connectWallet');

    connectButton.addEventListener('click', async () => {
        if (typeof window.ethereum !== 'undefined') {
            try {
                // Request account access
                await window.ethereum.request({ method: 'eth_requestAccounts' });

                // Attempt to switch to the Ethereum mainnet
                await switchToEthereumMainnet();

                const web3 = new Web3(window.ethereum);
                // Display the connected account
                const accounts = await web3.eth.getAccounts();
                connectButton.innerText = `Connected: ${accounts[0].substring(0, 4)}...`;
            } catch (error) {
                console.error(error);
                alert(error.message);
            }
        } else {
            alert('Ethereum wallet is not installed. Please consider installing MetaMask.');
        }
    });

    async function switchToEthereumMainnet() {
        try {
            await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: '0x1' }], // This is the chain ID for Ethereum Mainnet
            });
        } catch (switchError) {
            // This error code indicates that the chain has not been added to MetaMask
            if (switchError.code === 4902) {
                try {
                    await window.ethereum.request({
                        method: 'wallet_addEthereumChain',
                        params: [{
                            chainId: '0x1',
                            rpcUrl: 'https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID' // You need to replace YOUR_INFURA_PROJECT_ID with your Infura Project ID
                        }],
                    });
                } catch (addError) {
                    // Handle the error from adding a new network
                    throw addError;
                }
            } else {
                throw switchError;
            }
        }
    }
});

  