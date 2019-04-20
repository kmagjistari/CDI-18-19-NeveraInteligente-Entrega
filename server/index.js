"use strict"

const express = require("express");
const fs = require("fs");
const http = require("http");
const path = require("path");

const app = express();
const directoryToServe = "client";
const port = 3443;

app.use("/", express.static(path.join(__dirname, "..", directoryToServe)));

http.createServer(app)
	.listen(port, function(){
		console.log(`Serving the ${directoryToServe}/ directory at https://localhost:${port}`);
	});