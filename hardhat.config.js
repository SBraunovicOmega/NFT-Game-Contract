require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 module.exports = {
  solidity: '0.8.1',
  networks: {
    rinkeby: {
      url: 'https://black-weathered-model.rinkeby.discover.quiknode.pro/f2559d2166774df7a08b0fbd0cfee7bdd87e215c/',
      accounts: ['e227d8fbc3358f4abe17db00c97ca3c6897f40663f701a062b9521691ac09d9c'],
    },
  },
};