import { useState, useEffect } from 'react'
import '../styles/globals.css'
import '../components/notes/styles.css'
import Layout from '../components/layout/Layout'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, signInWithGoogle } from '../firebase/firebase'
import TypeIt from "typeit-react";
import { useRouter } from 'next/router'

const Landing = () => {
  return (
    <div>
      <div>
        <h1>
          <TypeIt
            options={{
              strings: ["Bitastik"],
              waitUntilVisible: true,
            }}
          />

        </h1>
      </div>
      <div>
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
      </div>

    </div>
  )
}

function MyApp({ Component, pageProps }) {
  const [user] = useAuthState(auth)
  console.log(user)
  const router = useRouter()
  useEffect(() => {
    if (user) router.push('/dashboard')
  }, [user])
  return (
    <> {user ?
      <Layout>
        <Component {...pageProps} />
      </Layout> : <div>
        <Landing />
        <button onClick={async () => {
          await signInWithGoogle();
        }}>Login</button>

      </div>

    }
    </>

  )


}

export default MyApp



