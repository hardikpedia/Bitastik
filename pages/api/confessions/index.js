import Confession from '../../../models/Confession'
import dbConnect from "../../../lib/dbconnect";
dbConnect();

async function handler(req, res) {
    if (req.method === "POST") {
        try {
            const { uid, title, note } = req.body;
            const todo_instance = new Todo({
                uid: uid,
                title: title,
                note: note,
            });
            await todo_instance.save();
            res.status(200).json({ message: "content Added", Status: "Success" });
        } catch (err) {
            const response = { Status: "Failure", Description: err.message };
            res.status(400).send(response);
        }
    }
    if (req.method === "GET") {
        try {
            console.log("hello world");
            const { uid } = req.body;
            const todo_instance = await Todo.find({ uid });
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

    if (req.method === "DELETE") {
        try {
            console.log("hello world")
            const { id } = req.body;
            const todo_instance = await Todo.deleteOne({ _id: id });
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
