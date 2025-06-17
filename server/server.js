require("dotenv").config();
const express = require("express");
const app = express();

// Body parsing middleware (for JSON)
app.use(express.json()); // ⬅️ required to parse JSON bodies

const userRoute = require("./routes/auth.route");
const db = require("./utils/db");

// routes
// api/user/auth/register
connectServer();
app.use("/api/user",userRoute);


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









