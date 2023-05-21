const express = require('express')
const bodyParser = require('body-parser')
const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");
const app = express()
const cors = require('cors');
 app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

 
app.get('/', (req, res) => {
  res.send('Hello World!')
})
 
app.post('/upload_img/', async (req, res) => {
    let data = req.body;

   // console.log("dskjd   ", req.path)
    await Moralis.start({
        apiKey: "lMC7TsnWjfD4rYrNgJBFMqPf4otouLR1hd1wHHBtqXraRmufoMa8bFeH7HuidVnD",
        // ...and any other configuration
      });
    
      const abi = [
        {
          path: data.path,
          content: data.content,
        },
      ];
    
      const response = await Moralis.EvmApi.ipfs.uploadFolder({ abi });
    
      console.log(response.toJSON());
    res.send(response);
})
 
 
app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
})