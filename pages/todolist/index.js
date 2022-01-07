import MotionHoc from "../../components/animation/Motionhoc";
import Todolist from "../../components/notes/Todolist";
import dbConnect from "../../lib/dbconnect";
import Todo from '../../models/Todo'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase";

const Documents = ({todo}) => {
  const [user] = useAuthState(auth);
  return <Todolist todo={todo}></Todolist>;
};

export default Documents

export async function getStaticProps() {
  
    await dbConnect();
    const data = await Todo.find({});
    const todo = JSON.parse(JSON.stringify(data))
    
    return {
      props: {
        todo,
      },
      revalidate: 60,
    };
  }