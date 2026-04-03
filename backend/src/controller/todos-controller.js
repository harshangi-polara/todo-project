const todoService = require("../service/todos-services");

create = async (req, res) => {
  try {
    const todo = await todoService.createTodo(req.body, req.user.id);
    res.status(201).json(todo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

getAll = async (req, res) => {
  const todos = await todoService.getTodos(req.user.id);
  res.json(todos);
};

update = async (req, res) => {
  try {
    const todo = await todoService.updateTodo(
      req.params.id,
      req.body.title,
      req.user.id,
    );
    res.json(todo);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

remove = async (req, res) => {
  try {
    await todoService.deleteTodo(req.params.id, req.user.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

module.exports = { create, getAll, update, remove };
