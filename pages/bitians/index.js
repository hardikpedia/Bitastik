import dbConnect from "../../lib/dbconnect";
import User from '../../models/User'
import ProfileList from "../../components/profile/profileList";
import { useState } from 'react'
import Dropdownbtn from "../../components/profile/dropdownbtn";
function BitPage(props) {
    const [userData, setUserData] = useState(props.userData);
    function filterData() {
        // console.log(name);
        const newData = userData.filter((info) => {
            return info.branch === "CSE";
        })
        setUserData(newData)
    }
    return (
        <>
            {/* <button style={{ color: "red", position: "fixed", right: "0", top: "0" }} onClick={filterData}>Filter</button> */}
          <Dropdownbtn onSelect={filterData}/>
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