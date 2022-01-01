
import ReactBigCalendar from "../../components/calender/ReactBigCalendar"
import React from 'react'
import MotionHoc from "../../components/animation/Motionhoc"

const  CalendarComponents=()=> {
    return (
        <div style={{
            width: '90vw',
        }}>
         
                <ReactBigCalendar />
        </div>
    )
}
const Calendar=MotionHoc(CalendarComponents)
export default Calendar



