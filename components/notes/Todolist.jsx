import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
// import Todo from '../../models/Todo'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth} from "../../firebase/firebase";

function Todolist({todo}) {
  const [user] = useAuthState(auth);

  const [notes, setNotes] = useState(todo);
  async function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
    await fetch('/api/todo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(newNote)
        })
  }

  async function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
    await fetch("/api/todo", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({id: notes[id]._id}),
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={noteItem._id}
            id={index}
            uid={user.uid}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
    </div>
  );
}

export default Todolist;
