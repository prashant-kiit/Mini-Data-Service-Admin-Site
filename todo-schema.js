import { Schema, model } from 'mongoose';

const FeedDateTime = new Schema({
  year: Number,
  month: Number,
  day: Number,
  hours: Number,
  minutes: Number,
  seconds: Number
});

const TodoSchema = new Schema({
  userId: Number,
  id: Number,
  title: String,
  completed: Boolean,
  feeddatetime: FeedDateTime
});

const Todo = model('Todo', TodoSchema);

export default Todo;
