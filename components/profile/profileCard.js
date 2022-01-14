import Classes from './profileCard.module.css'
import link from '../../assets/link.png'
import insta from '../../assets/insta.png'
import git from '../../assets/git.png'
import Image from "next/image"
function ProfileCard({ info}) {
    console.log(info);
    return (
        <main className={Classes.profile}>
            <div className={Classes.profileBg}></div>
            <section className={Classes.container}>
                <aside className={Classes.profileImage}>
                    {/* <Image src={info.}/> */}
                    <a className={Classes.camera} href="#">
                        <i class="fas fa-camera"></i>
                    </a>
                </aside>
                <section className={Classes.profileInfo}>
                    <h1 className={Classes.firstName}>{info.username}</h1>
                    <h2 className={Classes.secondName}>{info.branch}</h2>
                    <h2>ABOUT</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, tempora quaerat! Dignissimos maiores aspernatur, nam modi natus alias adipisci nesciunt, tenetur illo a, asperiores sequi. Eum non nisi aliquam nostrum!
                    </p>

                    <aside className={Classes.socialMediaIcons}>
                        <a href="https://twitter.com/zephybite" target="_blank">
                        <span ><Image src={link} height={48} width={48}/></span>
                        </a>
                        <a href="https://codepen.io/zephyo" target="_blank">
                        <span ><Image src={insta} height={48} width={48}/></span>
                        </a>
                        <a href="https://github.com/zephyo" target="_blank">
                        <span ><Image src={git} height={48} width={48}/></span>
                        </a>
                        <a href="https://medium.com/@zephyo" target="_blank">
                            <i class="fab fa-medium"></i>
                        </a>
                    </aside>
                </section>
            </section>
            <section className={Classes.statistics}>
                <button class="icon arrow left"></button>
                <button class="icon arrow right"></button>
                <p>Hostel<strong>29</strong> </p>
                <p>Room<strong>184</strong> </p>
                <p>YoG<strong>2024</strong> </p>
            </section>
            <button class="icon close"></button>
        </main >
    )
}

export default ProfileCard;
