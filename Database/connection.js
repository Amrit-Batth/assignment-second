import mongoose from "mongoose";

const connection  = mongoose.connect('mongodb://localhost:27017/socialMedia')
.then(console.log("connection successfull"))
.catch(console.error);

export default connection;
