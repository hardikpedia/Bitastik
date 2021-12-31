import MotionHoc from "../components/animation/Motionhoc";
import TypeIt from "typeit-react";
import React from 'react'
import styles from '../styles/Home.module.css'
import ThirdPartyEmailPassword from 'supertokens-auth-react/recipe/thirdpartyemailpassword'
import dynamic from 'next/dynamic'
import supertokensNode from 'supertokens-node'
import { backendConfig } from '../config/backendConfig'
import Session from 'supertokens-node/recipe/session'

const ThirdPartyEmailPasswordAuthNoSSR = dynamic(
    new Promise((res) =>
        res(ThirdPartyEmailPassword.ThirdPartyEmailPasswordAuth)
    ),
    { ssr: false }
)

export async function getServerSideProps(context) {
    // this runs on the backend, so we must call init on supertokens-node SDK
    supertokensNode.init(backendConfig())
    let session
    try {
        session = await Session.getSession(context.req, context.res)
    } catch (err) {
        if (err.type === Session.Error.TRY_REFRESH_TOKEN) {
            return { props: { fromSupertokens: 'needs-refresh' } }
        } else if (err.type === Session.Error.UNAUTHORISED) {
            return { props: {} }
        } else {
            throw err
        }
    }

    return {
        props: { userId: session.getUserId() },
    }
}

export default function Home(props) {
    return (
        <ThirdPartyEmailPasswordAuthNoSSR>
                <ProtectedPage userId={props.userId} />
        </ThirdPartyEmailPasswordAuthNoSSR>
    )
}

function ProtectedPage({ userId }) {
    async function logoutClicked() {
        await ThirdPartyEmailPassword.signOut()
        ThirdPartyEmailPassword.redirectToAuth()
    }

    async function fetchUserData() {
        const res = await fetch('/api/user')
        if (res.status === 200) {
            const json = await res.json()
            alert(JSON.stringify(json))
        }
    }
    return (<div>
        <h1>
            <TypeIt
                options={{
                    strings: ["Bitastik"],
                    waitUntilVisible: true,
                }}
            />

        </h1>
        <h1>
            <TypeIt
                getBeforeInit={(instance) => {
                    instance.pause(1000).type("Making Bit Fantastic").pause(750).delete(6).pause(500).type("FuckingTastic !!!");
                    return instance;
                }}
                options={{
                    loop: true,
                }}
            />
        </h1>
        <button onClick={logoutClicked}>Signout</button>
    </div>)

}

