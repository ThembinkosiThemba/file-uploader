const Moralis = require("moralis").default
const fs = require("fs")

async function uploadToIPFS() {
    await Moralis.start({
        apiKey:"rSeU40ZxlbR3WaRxXOK5zzmrVPAxdznOXkZvFCF5fZCZ4oYP1EfdtOPsi9KkAHXI"
    })

    const uploadArray = [
        // {
        //     path: "bane.png",
        //     content:fs.readFileSync('./bane.jpg',{encoding:'base64'})
        // },
        {
            path:"townnnns.json",
            content:{
                one:"red",
                two:"green",
            }
        },
    ];

    const response = await Moralis.EvmApi.ipfs.uploadFolder({
        abi: uploadArray,
    })

    console.log(response.result);
    console.log("Files uploaded!")
}

uploadToIPFS();