require("dotenv").config();
const express = require("express");
const app = express();
const locationSaveToDb = require("./zipcodeConfiguration/importZipcodes");
const cors = require('cors');

const corsOptions = {
  origin: "http://localhost:5173",
  method: "GET, POST, PUT, PATCH, DELETE, PATCH, HEAD",
  credential:true
}

app.use(cors(corsOptions))

// Body parsing middleware (for JSON)
app.use(express.json()); //  required to parse JSON bodies

const userRoute = require("./routes/auth.route");
const locationRoute = require("./routes/zipcodes.route");
const verificationRoute = require("./routes/email.verification.route")
const donorRoute = require("./routes/nearest.donor.route");
const db = require("./utils/db");


// routes
// api/user/auth/register
connectServer();
app.use("/api/user",userRoute);
app.use("/api/location",locationRoute);
app.use("/api/user/registration",verificationRoute);
app.use("/api/donors",donorRoute);

const PORT = process.env.PORT;

async function connectServer(){
    try {
      await db();
      app.listen(PORT, () => {
        console.log(`server is started on ${PORT}`)
        locationSaveToDb();
      })
    } catch (error) {
      console.log("Error has been generated in connecting the server:",error);
    }
}









