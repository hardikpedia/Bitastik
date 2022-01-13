import Classes from './profilePage.module.css'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase";
import {useState,useEffect} from 'react'
import Image from 'next/image';
function profilePage() {
    const [user] = useAuthState(auth);
    const [info,setInfo]=useState({})
    useEffect(() => {
        if (user) {
            const fetchData = async () => {
                const userData = await fetch(`/api/profile/${user.uid}`);
                const data = await userData.json();
                setInfo(data.users);
            };
            fetchData();
        }
    }, [user]);
    return (
        <main className={Classes.profile}>
            <div className={Classes.profileBg}></div>
        <section className={Classes.container}>
                <aside className={Classes.profileImage}>
                        <Image src={user.photoURL} layout='fill'/>
                    <a className={Classes.camera} href="#">
                        <i class="fas fa-camera"></i>
                    </a>
                </aside>
                <section className={Classes.profileInfo}>
                    <h1 className={Classes.firstName}>{user.displayName}</h1>
                    {/* <h1 className={Classes.secondName}>Yun He</h1> */}
                    <h2>ABOUT</h2>
                    <p>
                         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, tempora quaerat! Dignissimos maiores aspernatur, nam modi natus alias adipisci nesciunt, tenetur illo a, asperiores sequi. Eum non nisi aliquam nostrum!
                    </p>

                    <aside className={Classes.socialMediaIcons}>
                        <a href="https://twitter.com/zephybite" target="_blank">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="https://codepen.io/zephyo" target="_blank">
                            <i class="fab fa-codepen"></i>
                        </a>
                        <a href="https://github.com/zephyo" target="_blank">
                            <i class="fab fa-github"></i>
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
                <p><strong>29</strong> Followers</p>
                <p><strong>184</strong> Following</p>
                <p><strong>6</strong> Likes</p>
            </section>
            <button class="icon close"></button>
        </main >
    )
}

export default profilePage;