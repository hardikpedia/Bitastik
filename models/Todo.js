import { Schema, model, models } from 'mongoose';

const todoSchema = new Schema(
  {
    uid: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      max: 25,
    },
    content: {
      type: String,
      max: 100,
    },
  },
  { timestamps: true }
);

export default models.todolist || model('todolist', todoSchema);
