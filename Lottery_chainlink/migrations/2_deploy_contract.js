const BettingGame = artifacts.require('./BettingGame.sol')

module.exports = async deployer => {
  await deployer.deploy(BettingGame)
  const bettingGame= await BettingGame.deployed(
      console.log(bettingGame.address)
  )
}
