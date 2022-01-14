import Classes from './dropdownbtn.module.css'
import { useState } from 'react'
function dropdownbtn({ onSelect }) {
    const [bts, setBts] = useState({ display: "none" })
    function clickHandler(data) {
        onSelect(data)
    }
    function dropClick() {
        if (bts.display === "none") {
            setBts({ display: "block" })
        }
        else {
            setBts({ display: "none" })
        }
    }
    return (
        <div className={Classes.dropdown} style={{ position: "fixed", top: "0", right: "0" }}>
            <button className={Classes.dropbtn} onClick={dropClick}>Dropdown</button>
            <div id="myDropdown" className={Classes.dropdownContent} style={bts}>
                <a onClick={clickHandler} name="CSE" href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
            </div>
        </div>
    )
}

export default dropdownbtn;