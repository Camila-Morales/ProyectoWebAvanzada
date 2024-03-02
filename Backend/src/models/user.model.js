import mongoose from "mongoose";

const User = mongoose.Schema({
  userName:{
    type: String,
    trim: true,
    require: true,
  },
  name: {
    type: String,
    trim: true,
    require: true,
  },
  lastName: {
    type: String,
    trim: true,
    require: true,
  },
  email: {
    type: String,
    trim: true,
    require: true,
  },
  birthdate: {
    type: Date,
    trim: true,
    require: true,
  },
  gender: {
    type: String,
    trim: true,
    require: true,
  },
  plan:{
    type:Number,
    trim:true,
    require:true
  }
});
export default mongoose.model("Users", User);
