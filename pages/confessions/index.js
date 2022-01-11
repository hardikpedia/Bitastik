import ConfessionList from "../../components/confessions/ConfessionList";
import Cheader from "../../components/confessions/Cheader";
import Confession from "../../models/Confession";
import dbConnect from '../../lib/dbconnect'
import { format } from "timeago.js";

const ConfessionPage = ({ confessions }) => {

    return <div style={{position:"absolute",top:"0"}}>
   
        <ConfessionList confessions={confessions} />
    </div>
};


export default ConfessionPage;

export async function getStaticProps() {

    await dbConnect();
    const data = await Confession.find().sort({"createdAt":-1});
    const confessions = JSON.parse(JSON.stringify(data))
    return {
        props: {
            confessions,
        },
        revalidate: 1,
    };
}
