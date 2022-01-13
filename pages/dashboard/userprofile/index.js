import ProfileForm from '../../../components/profile/profileForm'

function UserProfile() {
    async function addData(data) {
        await fetch("/api/profile", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
    }
    return (
        <div>
            <ProfileForm onAdd={addData} />
        </div>
    )
}

export default UserProfile;