const { default: mongoose } = require("mongoose");

const dbConnect = () => {
  try {
    const conn = mongoose.connect("mongodb://localhost:27017/mern01");
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log("Database ERROR");
  }
};

module.exports = dbConnect;
