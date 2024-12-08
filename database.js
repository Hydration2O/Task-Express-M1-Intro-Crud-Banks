const mongoose = require("mongoose");

const connectDB = async () => {
  console.log("here");

  try {
    const conn = await mongoose.connect(
      "mongodb+srv://user1:yV6eBHXHBpsiwxsj@cluster0.himyy.mongodb.net/"
    );
    console.log(`mongo connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
