import MotionHoc from "../../components/animation/Motionhoc";
import ConfessionList from "../../components/confessions/ConfessionList";
import Confession from "../../models/Confession";
import dbConnect from '../../lib/dbconnect'
const ConfessionPage= ({confessions}) => {
    return <ConfessionList confessions={confessions}/>;
};


export default ConfessionPage;

export async function getStaticProps() {

    await dbConnect();
    const data = await Confession.find({});
    const confessions = JSON.parse(JSON.stringify(data))

    return {
        props: {
            confessions,
        },
        revalidate: 60,
    };
}
