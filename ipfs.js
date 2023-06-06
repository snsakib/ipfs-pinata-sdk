require("dotenv").config();
const pinataSDK = require("@pinata/sdk");
const pinata = new pinataSDK({
  pinataApiKey: process.env.PINATA_API_KEY,
  pinataSecretApiKey: process.env.PINATA_SECRET_API_KEY,
});

const fs = require("fs");
const readableStreamForFile = fs.createReadStream("./img/sci-fi.jpg");
const options = {
  pinataMetadata: {
    name: "nft-marketplace-dapp",
    keyvalues: {
      customKey: "customValue",
      customKey2: "customValue2",
    },
  },
  pinataOptions: {
    cidVersion: 0,
  },
};
pinata.pinFileToIPFS(readableStreamForFile, options).then((result) => {
    //handle results here
    console.log(result);
}).catch((err) => {
    //handle error here
    console.log(err);
});
