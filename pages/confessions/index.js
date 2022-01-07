import MotionHoc from "../../components/animation/Motionhoc";
import Confession from "../../components/confessions/ConfessionItem";
const TeamComponent = () => {
    return <Confession/>;
};

const Team = MotionHoc(TeamComponent);

export default Team;
