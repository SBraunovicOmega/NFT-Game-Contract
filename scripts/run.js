
const main = async ()=>{
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
        ["Bečić", "Abazović", "Krivokapić"], //Names
        ["https://i.imgur.com/Nzl5gRs.jpg",  //Images
        "https://i.imgur.com/mCSyZIv.jpg",
        "https://i.imgur.com/d3GW8Uh.jpg"],
        [100,200,300], // HP values
        [100,50,25] // Attack damage values
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);
}


const runMain = async ()=>{
    try{
        await main();
        process.exit(0)
    }catch (error){
        console.log(error);
        process.exit(1)
    }
}


runMain()