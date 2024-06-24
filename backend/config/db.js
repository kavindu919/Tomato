import mongoose from "mongoose";

//established the connection with data base

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://jayakodyk2:l5sPNqaW0Czez7e6@cluster0.uvmgjnj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(() => {
      console.log("Connect to the database...");
    });
};
