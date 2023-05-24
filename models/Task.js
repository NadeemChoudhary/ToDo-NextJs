import mongoose from "mongoose";
const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true, 
  },
  description: {
    type: String,
    required: true,

  },
  isCompleted: {
    type: Boolean,
    required: true,
    default : false
  },
  user : {
    type: mongoose.Schema.Types.ObjectId,
    required : true,
    ref : "Users"
  },
  createdAt : {
    type : Date , 
    default : Date.now
  }
});
mongoose.models = {};
export const TasksModel = mongoose.model("Tasks", schema);
