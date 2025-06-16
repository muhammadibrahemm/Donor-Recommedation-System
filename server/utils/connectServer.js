const db = require("./db");
const express = require("express");
const app = express();

const PORT = process.env.PORT;


async function connectServer(){
    try {
      await db();
      app.listen(PORT, () => {
        console.log(`server is started on ${PORT}`)
      })
    } catch (error) {
      console.log("Error has been generated in connecting the server:",error);
    }
}

module.exports = connectServer;

