import MotionHoc from "../../components/animation/Motionhoc";
import Todolist from "../../components/notes/Todolist";
const DocumentsComponent = () => {
    return (<Todolist/>)
};

const Documents = MotionHoc(DocumentsComponent);

export default Documents;
