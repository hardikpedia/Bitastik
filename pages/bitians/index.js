import dbConnect from "../../lib/dbconnect";
import User from '../../models/User'
import ProfileList from "../../components/profile/profileList";
import { useState} from 'react'
import Dropdownbtn from "../../components/profile/dropdownbtn";
import Yogdrop from "../../components/profile/yogdrop";
function BitPage(props) {
    const superData=props.userData
    const [userData, setUserData] = useState(props.userData);
    async function filterData(name) {
         setUserData(superData);
        const newData =await superData.filter((info) => {
            return info.branch === name;
        })
        setUserData(newData)
    }
    async function batchwise(name) {
         setUserData(superData);
        const newData =await superData.filter((info) => {
            return info.yearofgraduation === parseInt(name);
        })
        console.log(name);
        setUserData(newData)
    }
    return (
        <>
          <Dropdownbtn onSelect={filterData}/>
          <Yogdrop onSelect={batchwise}/>
            <ProfileList data={userData} />
        </>

    )
}

export default BitPage;

export async function getStaticProps() {
    await dbConnect()
    const data = await User.find({})
    // const news = JSON.parse(JSON.stringify(data))
    return {
        props: {
            userData: data.map((info) => ({
                uid: info.uid,
                image:info.image,
                username: info.username,
                email: info.email,
                roll: info.roll,
                insta: info.insta,
                linkedIn: info.linkedIn,
                github: info.github,
                bio: info.bio,
                branch: info.branch,
                yearofgraduation: info.yearofgraduation,
                hostel: info.hostel,
                room: info.room,
                phone: info.phone
            }))
        },
        revalidate: 60,
    }
}