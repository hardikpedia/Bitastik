import Sidebar from '../sidebar/index.js';
// import classes from './la';
import Classes from "../ui/PageUI/pageStyle.module.css";
import Heading from '../header/index'
import dynamic from 'next/dynamic';
// import Footer from '../footer/footer';
// const Footer = dynamic(() => import('../footer/footer'), { ssr: false })


// import webpages from "../ui/PageUI/pageStyle";
function Layout({ children }) {
    return (
        <>
            <Sidebar />
            <div className={Classes.main}>
                {children}
            </div>
           {/* <Footer/> */}
        </>

    );
}

export default Layout;
