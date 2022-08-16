
const main = async ()=>{
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
        ["Bečić", "Abazović", "Krivokapić"], //Names
        ["https://i.imgur.com/Nzl5gRs.jpg",  //Images
        "https://i.imgur.com/mCSyZIv.jpg",
        "https://i.imgur.com/d3GW8Uh.jpg"],
        [100,200,300], // HP values
        [100,50,25], // Attack damage values
        "LOMI", //Boss name
        "https://i.imgur.com/qDr6Ia8.jpg", //Boss image
        10000, // Boss hp
        50 // Boss attack damage
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);
    //We only have three characters.
    //an NFT w/ the character at index 2 of our array.
    // let txn;
    // txn= await gameContract.mintCharacterNFT(2);
    // await txn.wait();
    // console.log("Minted NFT #2");

    // txn = await gameContract.attackBoss();
    // await txn.wait();

    // txn = await gameContract.attackBoss();
    // await txn.wait();

//     txn = await gameContract.mintCharacterNFT(1);
//   await txn.wait();
//   console.log("Minted NFT #2");

//   txn = await gameContract.mintCharacterNFT(2);
//   await txn.wait();
//   console.log("Minted NFT #3");

//   txn = await gameContract.mintCharacterNFT(1);
//   await txn.wait();
//   console.log("Minted NFT #4");
        // console.log('Done!');
//   console.log("Done deploying and minting!");

    // Get the value of the NFT's URI.
    // let returnedTokenUri = await gameContract.tokenURI(1);
    // console.log("Token URI", returnedTokenUri);
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