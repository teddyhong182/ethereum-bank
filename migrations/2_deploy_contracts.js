const Bank = artifacts.require("Bank");

module.exports = function(deployer, network, accounts) {
    let ownerAddress = accounts[0];
    deployer.deploy(Bank, ownerAddress);
};