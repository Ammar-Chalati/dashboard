import React, {useRef} from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import useCalendar from '../../store/Calendar'
import { createEventId } from '../../store/Data'


import './visitorList.css';

const VisitorList = () => {
  const ref = useRef();
  const { currentEvents, setCurrentEvents } = useCalendar()

  const handleEvents = async (events) => {
    await Promise.resolve(setCurrentEvents(events))
  }

const handleDateSelect = (selectInfo) => {
  let title = prompt('Please enter a title for the event')
  let calendarApi = selectInfo.view.calendar;

  calendarApi.unselect();

  if (title) {
    calendarApi.addEvent({
      id: createEventId(),
      title,
      start: selectInfo.start,
      end: selectInfo.end,
      allDay: selectInfo.allDay
    })
  }
}



const handleEventClick = (clickInfo) => {
  ref.current.style.cssText = 'display: flex;'
  // clickInfo.event.remove()
}
console.log(ref.current)
return (
  <div className="visitorList">

    <div className='fullCalendar'>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
        headerToolbar={{
          left: 'prev,next today',
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay"
      }}
        allDaySlot={false}
        initialView="dayGridMonth"
        slotDuration={"01:00:00"}
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        weekends={true}
        nowIndicator={true}
        initialEvents={currentEvents}
        eventsSet={handleEvents}
        select={handleDateSelect}
        eventClick={handleEventClick}
      />
    </div>
    <div ref={ref} className="sureDel">
      <p>Are you sure you want to delete the item?</p>
      <div className="buttons">
        <div style={{background : 'rgb(205, 53, 59)', color : '#fff'}}>cancel</div>
        <div style={{background : '#4eb63d', color : '#fff'}}>yes</div>
      </div>
    </div>
  </div>
  )
}

export default VisitorList