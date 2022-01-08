import MotionHoc from "../../components/animation/Motionhoc";
import Todolist from "../../components/notes/Todolist";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase";
import { useEffect } from "react";

const Documents = ({todo}) => {
  return (
    <div style={{position:"absolute",top:"0"}}>
      <Todolist />
    </div>
  )
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