import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
// import Todo from '../../models/Todo'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth} from "../../firebase/firebase";
function Todolist(props) {
  const [user] = useAuthState(auth);

  const [notes, setNotes] = useState(props.todo);
  console.log(notes);
  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={objId}
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


export async function getStaticProps() {
  await dbConnect();
  const data = await Todo.find({});
  const todo = JSON.parse(JSON.stringify(data))
  return {
    props: {
      todo: data.map((info) => ({
        title: info.title,
        content: info.content,
        uid: info.uid,
        objId:info._id.toString()
      })),
    },
    revalidate: 60,
  };
}
export default Todolist;
