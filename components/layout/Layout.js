import Sidebar from '../sidebar/index.js';
// import classes from './la';
import Classes from "../ui/PageUI/pageStyle.module.css";

// import webpages from "../ui/PageUI/pageStyle";
function Layout({ children }) {
    return (
        <>
            <Sidebar />
            <div className={Classes.main}>
                {children}
            </div>
        </>

    );
}

export default Layout;
