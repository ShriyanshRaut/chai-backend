import connectDB from "./db/index.js";
import dotenv from "dotenv";
import express from "express"; // Import express
dotenv.config({
  path: './.env'
});

const app = express(); // Initialize the express app

app.use(express.json()); // Middleware to parse JSON requests

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port : ${process.env.PORT || 8000}`);
    });
  })
  .catch((err) => {
    console.log("MONGO DB connection failed!!! ", err);
  });










/*

import express from "express";
const app = express();

(async () => {
    try {
        await mongoose.connect('${process.env.MONGODB_URI}, /${ dbName: {DB_NAME}')
        app.on("error", (error) => {
            console.log("ERROR:", error);
            throw error;
        })
        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        });
    } catch (error) {
        console.error("Database connection error:", error);
        throw error;
    }
}) ()
*/
