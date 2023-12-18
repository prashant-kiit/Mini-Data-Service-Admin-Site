import { Schema, model } from 'mongoose';

const TodoSchema = new Schema({
  userId: Number,
  id: Number,
  title: String,
  completed: Boolean
});

const Todo = model('Todo', TodoSchema);

export default Todo;
