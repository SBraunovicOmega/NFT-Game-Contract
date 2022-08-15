
const main = async ()=>{
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy();
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);
}


const runMian = async ()=>{
    try{
        await main();
        process.exit(0)
    }catch (error){
        console.log(error);
        process.exit(1)
    }
}


runMian()