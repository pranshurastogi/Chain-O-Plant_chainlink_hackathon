var greencoin = artifacts.require("./greencoin.sol");
var TokenSale=artifacts.require("./TokenSale.sol")
module.exports = function(deployer) {
	deployer.deploy(greencoin, 1000000).then(function() {
	  // Token price is 0.001 Ether
	  var tokenPrice = 1000000000000000;
	  return deployer.deploy(TokenSale, greencoin.address, tokenPrice);
	});
  };
