import Classes from './profilePage.module.css'

function profilePage() {
    return (
        <main className={Classes.profile}>
            <div className={Classes.profileBg}></div>
        <section className={Classes.container}>
                <aside className={Classes.profileImage}>
                    <a className={Classes.camera} href="#">
                        <i class="fas fa-camera"></i>
                    </a>
                </aside>
                <section className={Classes.profileInfo}>
                    <h1 className={Classes.firstName}>Angela</h1>
                    <h1 className={Classes.secondName}>Yun He</h1>
                    <h2>ABOUT</h2>
                    <p>
                        hello hello, I'm angela, artist and developer 🌼 student at stanford; intern at zynga 🌱 happy to be here! 🌿 let's code the best we can!
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