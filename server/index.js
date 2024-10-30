const express = require("express");
const server = express();
const cors = require("cors");
require("dotenv").config();

const { PORT } = process.env || 5000;

//* middlewares
server.use(cors());
server.use(express.json());

server.listen(PORT, () => {
	console.log(`Server raised at port ${PORT}`);
});
