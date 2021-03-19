var greencoin = artifacts.require("./greencoin.sol");

module.exports = function(deployer) {
	deployer.deploy(greencoin);
};
