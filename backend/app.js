require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { db } = require('./db/connect');
const app = express();

const PORT = process.env.PORT;

// Middlewares
app.use(express.json());
app.use(cors());


const server = () => {
   db();
   app.listen(PORT, () => {
   console.log(`You are listening to port: ${PORT}`);
   })
}

server();