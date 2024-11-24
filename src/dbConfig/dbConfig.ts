import mongoose from "mongoose";

/**
 * Establishes a connection to the MongoDB database using Mongoose.
 * 
 * This function attempts to connect to the MongoDB database specified in the
 * environment variables. It uses Mongoose as the ODM (Object Document Mapper)
 * to manage the connection.
 * 
 * @throws {Error} If the connection fails or if the required environment variables are not set.
 * 
 * @returns {Promise<void>} A promise that resolves when the connection is successfully established.
 */
export async function connect() {
  try {
    mongoose.connect(process.env.mongo_url!)
    const connection = mongoose.connection;
    connection.on('connected', () => {
      console.log('Connection established to Mongoose');
    });
    connection.on('error', (error) => {
      console.log('Connection error')
      process.exit(0);
    });
  } catch (error) {
    console.log("Error in connecting to MongoDB: ", error);
  }
}