require("dotenv").config();
const express = require("express");
const server = express();
const cors = require("cors");
const { PORT } = process.env || 5000;
const mongoose = require("mongoose");

//* middlewares
server.use(cors());
server.use(express.json());

server.listen(PORT, async () => {
	try {
		console.log(`Server raised at port ${PORT}`);

		await mongoose.connect(process.env.DB_URL);

		console.log("DB Connected Successfully!");
	} catch (error) {
		console.log(error);
	}
});
