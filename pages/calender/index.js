
import ReactBigCalendar from "../../components/calender/ReactBigCalendar"
import React from 'react'
import MotionHoc from "../../components/animation/Motionhoc"
import Books from '../../assets/books.jpg'
const  CalendarComponents=()=> {
    return (
        <div style={{
            width: '90vw',
            color: "white",
            backgroundColor: "#3492eb",
            // opacity: "0.8",
            // backgroundImage: "linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%)",
            borderRadius:"15px",
            padding:"20px",
            overflow:"hidden",

            // backgroundImage:`url(${Books})`
        }}>
         
                <ReactBigCalendar />
        </div>
    )
}
export default CalendarComponents



