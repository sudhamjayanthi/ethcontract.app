// const { SignClient } = require("@walletconnect/sign-client");
// const { Web3Modal } = require("@web3modal/standalone");

// window.SignClient = SignClient;
// window.Web3Modal = Web3Modal;

const { Web3Modal } = require("@web3modal/html");
const { configureChains, createClient } = require("@wagmi/core");
const { arbitrum, mainnet, polygon } = require("@wagmi/core/chains");
const { EthereumClient, modalConnectors, walletConnectProvider } = require("@web3modal/ethereum");

window.w3m = { Web3Modal, EthereumClient, modalConnectors, walletConnectProvider };
window.wagmi = { configureChains, createClient, chains: { arbitrum, mainnet, polygon } };