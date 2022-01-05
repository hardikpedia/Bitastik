import MotionHoc from "../components/animation/Motionhoc";
import TypeIt from "typeit-react";
import React from 'react'
import dynamic from 'next/dynamic'
import dbConnect from '../lib/dbconnect'

const Footer = dynamic(() => import('../components/footer/footer'), { ssr: false })

const HomeComponent = () => {
    return (
        <>
            <div>
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
            </div>
            {/* <div>
                <Footer />

            </div> */}
        </>

    )
}

const Home = MotionHoc(HomeComponent)
export default Home


