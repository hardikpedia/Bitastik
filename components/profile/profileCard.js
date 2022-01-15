import Classes from './profileCard.module.css'
import link from '../../assets/link.png'
import insta from '../../assets/insta.png'
import git from '../../assets/git.png'
import whatsapp from '../../assets/whatsapp.png'
import gmail from '../../assets/gmail.png'
// import profile from '../../assets/profile.jpeg'
import Image from "next/image"
function ProfileCard({ info }) {
    const what = `https://wa.me/${info.phone}`
    const mail = `mailto:${info.email}`
     console.log(info.image) 

    return (
        <main className={Classes.profile}>
            <div className={Classes.profileBg}></div>
            <section className={Classes.container}>
                <aside className={Classes.profileImage}>
                    <Image src={info.image || whatsapp} width={450} height={500} alt='undefined' objectFit='cover' />
                </aside>
                {/* <div className={Classes.image}>

                    { <Image src={insta} /> }
                </div> */}
                <section className={Classes.profileInfo}>
                    <h1 className={Classes.firstName}>{info.username}</h1>
                    <h2 className={Classes.secondName}>{info.branch}</h2>
                    <h2>ABOUT</h2>
                    <p>
                        {info.bio}
                    </p>

                    <aside className={Classes.socialMediaIcons}>
                        <a href={info.linkedIn} target="_blank">
                            <span ><Image src={link} height={24} width={24} /></span>
                        </a>
                        <a href={info.insta} target="_blank">
                            <span ><Image src={insta} height={24} width={24} /></span>
                        </a>
                        <a href={info.github} target="_blank">
                            <span ><Image src={git} height={24} width={24} /></span>
                        </a>
                        <a href={what} target="_blank">
                            <span ><Image src={whatsapp} height={24} width={24} /></span>
                        </a>
                        <a href={mail} target="_blank">
                            <span ><Image src={gmail} height={24} width={24} /></span>
                        </a>
                    </aside>
                </section>
            </section>
            <section className={Classes.statistics}>
                <p>Hostel<strong>{info.hostel}</strong> </p>
                <p>Room<strong>{info.room}</strong> </p>
                <p>Year of Graduation<strong>{info.yearofgraduation}</strong> </p>
            </section>
        </main >
    )
}

export default ProfileCard;
