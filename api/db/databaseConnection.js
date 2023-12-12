import mongoose from "mongoose";

const databaseConnection = async (uri) => {
  try {
    const options = {
      dbName: process.env.DB_NAME,
      user: process.env.DB_USER,
      pass: process.env.DB_PASS,
      authSource: process.env.DB_SOURCE,
    };
    await mongoose.connect(uri, options);
    console.log("Database connect successfully....");
  } catch (error) {
    console.log(error.message);
  }
};

export { databaseConnection };
