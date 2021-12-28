import "react-big-calendar/lib/css/react-big-calendar.css"
import { Calendar, momentLocalizer, Views } from 'react-big-calendar'
import moment from 'moment'
import React from "react"
const ColoredDateCellWrapper = ({ children }) =>
    React.cloneElement(React.Children.only(children), {
        style: {
            backgroundColor: 'grey',
            opacity:0.5
        },
    })

let allViews = Object.keys(Views).map(k => Views[k])

const localizer = momentLocalizer(moment)


const now = new Date()
console.log(now);

const myEventsList = [{
    id: 0,
    title: 'All Day Event very long title',
    allDay: true,
    start: new Date(2021, 29, 12),
    end: new Date(2021, 29, 12),
},
{
    id: 1,
    title: 'Long Event',
    start: new Date(2021, 11, 30),
    end: new Date(2021, 11, 30),
},
]
const MyCalendar = props => (
    <div>
        <Calendar
            showMultiDayTimes
            localizer={localizer}
            events={myEventsList}
            startAccessor="start"
            endAccessor="end"
            step={60}
            style={{ height:"90vh" }}
            views={allViews}
            components={{
                timeSlotWrapper: ColoredDateCellWrapper,
            }}
            selected
        />
    </div>
)
export default MyCalendar
