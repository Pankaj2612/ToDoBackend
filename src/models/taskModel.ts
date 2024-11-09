import mongoose, { Schema } from "mongoose";

const TaskSchema = new Schema({
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: {
    type: String,
    required: true,
    enum: ["To Do", "On Progress ", "Timeout", "Done"],
  },
  deadline: { type: Date, required: true },
  priority: { type: String, required: true, enum: ["Low", "High", "Medium"] },
});

const Task = mongoose.model("Task", TaskSchema);

export default Task;
