const CONTRACT_ABI = JSON.parse('[{ "inputs": [{ "internalType": "address", "name": "vrfCoordinator", "type": "address" }, { "internalType": "address", "name": "linkToken", "type": "address" }, { "internalType": "bytes32", "name": "vrfKeyHash", "type": "bytes32" }, { "internalType": "uint256", "name": "vrfFee", "type": "uint256" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "gameId", "type": "uint256" }, { "indexed": false, "internalType": "address", "name": "winner", "type": "address" }, { "indexed": false, "internalType": "bytes32", "name": "requestId", "type": "bytes32" }], "name": "GameEnded", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "gameId", "type": "uint256" }, { "indexed": false, "internalType": "uint8", "name": "maxPlayers", "type": "uint8" }, { "indexed": false, "internalType": "uint256", "name": "entryFee", "type": "uint256" }], "name": "GameStarted", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "gameId", "type": "uint256" }, { "indexed": false, "internalType": "address", "name": "player", "type": "address" }], "name": "PlayerJoined", "type": "event" }, { "stateMutability": "payable", "type": "fallback" }, { "inputs": [], "name": "fee", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "gameId", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "gameStarted", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "joinGame", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "keyHash", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "players", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "requestId", "type": "bytes32" }, { "internalType": "uint256", "name": "randomness", "type": "uint256" }], "name": "rawFulfillRandomness", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint8", "name": "_maxPlayers", "type": "uint8" }, { "internalType": "uint256", "name": "_entryFee", "type": "uint256" }], "name": "startGame", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "stateMutability": "payable", "type": "receive" }]')
const CONTRACT_ADDRESS = "0xeec0373dDf0d534C77b0B51F8254288fb0e14b41";
const MY_WALLET = "0xFE2de2924c17C5A5E351E5fD13E2657836716BdD";

// provider = new ethers.providers.JsonRpcProvider()
// let provider = new ethers.providers.Web3Provider(web3.currentProvider);  // for real wallets.  web3.currentProvider is deprecated
let provider = new ethers.providers.Web3Provider(ethereum);  // for real wallets
// let signer = provider.getSigner(0);
let signer = provider.getSigner(MY_WALLET);
let contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);

async function joinGame() {
    // candidateName = $("#candidate").val();
    console.log("Hello from ETHEREUM !!");
    let didGameStarted = await contract.gameStarted();
    console.log("Reading from the blockchain: ", didGameStarted);
    contract.joinGame();
    console.log("Just joint the game !!: ");
}

// $(document).ready(function () {

    // candidateNames = Object.keys(candidates);

    // for (var i = 0; i < candidateNames.length; i++) {
    //     let name = candidateNames[i];
    //     contract.totalVotesFor(ethers.utils.formatBytes32String(name)).then((f) => {
    //         $("#" + candidates[name]).html(f);
    //     })
    // }
// });
