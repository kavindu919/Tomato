import mongoose from "mongoose";

//established the connection with data base

export const connectDB = async () => {
  await mongoose.connect(process.env.URL).then(() => {
    console.log("Connect to the database...");
  });
};
