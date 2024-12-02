const mongoose = require("mongoose");

async function connectDB(){
  try{
      await mongoose.connect("mongodb://localhost:27017/tmdtteam15");
      console.log("connect db success");
  } catch(error){
      console.log("connect db fail: ", error.message);
  }
}

module.exports = connectDB;
