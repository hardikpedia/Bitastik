import ProfileCard from "./profileCard";

function ProfileList({ data }) {
    return (
        <>
            {data.map((information) => {
                return (
                    <ProfileCard key={information.uid} info={information} />

                )
            })}
        </>

    )
}

export default ProfileList;