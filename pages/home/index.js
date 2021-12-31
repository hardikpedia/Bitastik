import MotionHoc from "../../components/animation/Motionhoc";
import Classes from './home.module.css'
const HomeComponent = () => {
    return (
        <div className="shivam">
            <div className="hardik">Heeloo</div>
        </div>
    )
};

const Home = MotionHoc(HomeComponent);

export default Home;
