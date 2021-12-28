import MotionHoc from "../../components/animation/Motionhoc";
import Classes from './home.module.css'
const HomeComponent = () => {
    return <h1 style={{color:"black"}} >Home</h1>;
};

const Home = MotionHoc(HomeComponent);

export default Home;
