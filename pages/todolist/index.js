import MotionHoc from "../../components/animation/Motionhoc";
import Todolist from "../../components/notes/Todolist";
import dbConnect from "../../lib/dbconnect";
import Todo from '../../models/Todo'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase";
import { useEffect } from "react";
const Documents = ({todo}) => {
  const [user] = useAuthState(auth);
  useEffect(() => {
    const fetchData = async () => {
      const todo = await fetch('/api/todo?uid='+user.uid, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ uid: user.uid })
      })
      console.log(todo)
    }
    fetchData();
  }, [])


 
  return <Todolist todo={todo}></Todolist>;

};

export default Documents

// export async function getStaticProps() {
  
//     await dbConnect();
//     const data = await Todo.find({});
//     const todo = JSON.parse(JSON.stringify(data))
    
//     return {
//       props: {
//         todo,
//       },
//       revalidate: 60,
//     };
//   }