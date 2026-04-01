const Todo = require("../models/todos-model");

createTodo = async (data, userId) => {
  return await Todo.create({
    title: data.title,
    user: userId,
  });
};

getTodos = async (userId) => {
  return await Todo.find({ user: userId });
};

updateTodo = async (id, title, userId) => {
  const todo = await Todo.findOneAndUpdate(
    { _id: id, user: userId },
    { title },
    { new: true }
  );

  if (!todo) throw new Error("Todo not found");

  return todo;
};

deleteTodo = async (id, userId) => {
  const todo = await Todo.findOneAndDelete({
    _id: id,
    user: userId,
  });

  if (!todo) throw new Error("Todo not found");

  return todo;
};

module.exports = { createTodo, getTodos, updateTodo, deleteTodo };