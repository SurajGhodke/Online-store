const app = require("./app");
const connectWithDb = require("./config/db");
require("dotenv").config();
const cloudinary = require("cloudinary");

// connect with databases
connectWithDb();

//cloudinary config goes here
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running at port: ${port}`);
});
