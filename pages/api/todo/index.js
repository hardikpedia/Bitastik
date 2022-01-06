import Todo from "../../../models/Todo";
import dbConnect from "../../../lib/dbconnect";
dbConnect();

async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { user_id, title, note } = req.body;
      const todo_instance = new Todo({
        user_id: user_id,
        title: title,
        note: note,
      });
      await todo_instance.save();
      res.status(200).json({ message: "Note Added", Status: "Success" });
    } catch (err) {
      const response = { Status: "Failure", Description: err.message };
      res.status(400).send(response);
    }
  }
  if (req.method === "GET") {
    try {
      console.log("hello world");
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
}

export default handler;
