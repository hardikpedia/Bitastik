import ProfileCard from "./profileCard";
function ProfileList({ data }) {
    return (
        <>
            <div style={{display:"flex",flexDirection:"column",overflow:"hidden"}}>
                {data.map((information) => {
                    return (
                        <ProfileCard key={information.uid} info={information} />
                    )
                })}
            </div>

        </>

    )
}

export default ProfileList;