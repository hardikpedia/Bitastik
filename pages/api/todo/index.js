import Todo from "../../../models/Todo";
import dbConnect from "../../../lib/dbconnect";
dbConnect();

exports.addTodo = async (req, res) => {
  if (req.method === "POST") {
    try {
      const { user_id, title, note } = req.body;
      const todo_instance = await Todo.create(
        { user_id, title, note },
        { upsert: true }
      );
      res.status(200).json({ message: "Note Added", Status: "Success" });
    } catch (err) {
      const response = { Status: "Failure", Description: err.message };
      res.send(response).status(400);
    }
  }
};

exports.getTodo = async (req, res) => {
  if (req.method === "GET") {
    try {
      const { user_id } = req.body;
      const todo_instance = await Todo.find({ user_id });
      res.status(200).json({
        message: "All Todos of the particular user fetched",
        Status: "Success",
        todos: todo_instance,
      });
    } catch (err) {
      const response = { Status: "Failure", Description: err.message };
      res.send(response).status(400);
    }
  }
};
