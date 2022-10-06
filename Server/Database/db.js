const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(`mongodb+srv://saiteja:saiteja123@cluster0.7cshu.mongodb.net/todoApp`);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
    throw error;
  }
}

module.exports = { connectDB };
