
import ReactBigCalendar from "../../components/calender/ReactBigCalendar"
import React from 'react'
import MotionHoc from "../../components/animation/Motionhoc"

const  CalendarComponents=()=> {
    return (
        <div style={{
            marginLeft: '6rem',
            width: '90vw',
            overflowX: 'scroll',
        }}>
            <div style={{
                minWidth: '40rem',

            }}>
                <ReactBigCalendar />
            </div>
        </div>
    )
}
const Calendar=MotionHoc(CalendarComponents)
export default Calendar



