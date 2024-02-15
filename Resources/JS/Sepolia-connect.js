// Check for Ethereum provider
if (typeof window.ethereum !== 'undefined') {
    console.log('Ethereum successfully detected!');

    // Access the decentralized web!
    const ethereum = window.ethereum;

    // Request account access
    async function connectWallet() {
        try {
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            console.log('Connected', accounts[0]);
            document.getElementById('connectWallet').innerText = 'Wallet Connected';
        } catch (error) {
            console.error('Error connecting to MetaMask:', error);
        }
    }

    // Connect wallet on button click
    document.getElementById('connectWallet').addEventListener('click', connectWallet);

    // Handle account and network changes
    ethereum.on('accountsChanged', (accounts) => {
        // Handle the new accounts, or lack thereof.
        // "accounts" will always be an array, but it can be empty.
        if (accounts.length === 0) {
            console.log('Please connect to MetaMask.');
            document.getElementById('connectWallet').innerText = 'Connect Wallet';
        } else {
            console.log('Connected', accounts[0]);
            document.getElementById('connectWallet').innerText = 'Wallet Connected';
        }
    });

    ethereum.on('chainChanged', (chainId) => {
        // Handle the new chain.
        // You could also use this event to detect the user changing to a chain your DApp does not support and notify them.
        console.log('Chain changed to', chainId);
        window.location.reload();
    });
} else {
    // If no Ethereum provider is detected, log an error or display a message to the user.
    console.log('Please install MetaMask!');
    document.getElementById('connectWallet').innerText = 'Install MetaMask';
}
