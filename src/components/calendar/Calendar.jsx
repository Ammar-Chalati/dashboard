import React, {useRef} from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import useCalendar from '../../store/Calendar'


import './calendar.css';

const Calendar = () => {
  const sureDel = useRef();
  const sureUpdate = useRef();
  const sureAdd = useRef();
  const inputEvent = useRef();
  const { currentEvents, setCurrentEvents } = useCalendar()

  const handleEvents = async (events) => {
    await Promise.resolve(setCurrentEvents(events))
  }

  const handleCancel = () => {
    sureUpdate.current.style.cssText = 'display: none;';
    sureDel.current.style.cssText = 'display: none;';
  }

  const handleDateSelect = (selectInfo) => {
    // sureAdd.current.style.cssText = "display : flex;";
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect();

  }

  // clickInfo.event.remove();

  const handleEventClick = (clickInfo) => {
    sureUpdate.current.style.cssText = 'display: flex;';
    let ownervalue = document.querySelector(".calendar .sureUpdate .owner p:nth-child(2)");
    ownervalue.innerHTML = clickInfo.event.title;
    
  }

return (
  <div className="calendar">
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
    <div ref={sureDel} className="sureDel">
      <p>Are you sure you want to delete the item?</p>
      <div className="buttons">
        <div onClick={handleCancel} style={{background : 'rgb(205, 53, 59)', color : '#fff'}}>cancel</div>
        <div style={{background : '#4eb63d', color : '#fff'}}>yes</div>
      </div>
    </div>
    <div ref={sureUpdate} className="sureUpdate">
      <h3>Time and Spaces</h3>
      <div className="timingSpacingSchedule">
        <div className="timingSchedule">
          <p>9</p>
          <p>10</p>
          <p>11</p>
          <p>12</p>
          <p>1</p>
          <p>2</p>
        </div>
        <div className="SpacingSchedule">
          <p>A1</p>
          <p>B2</p>
          <p>C3</p>
          <p>A2</p>
          <p>B1</p>
        </div>
      </div>
      <div className="owner">
        <p>Owner : </p>
        <p></p>
      </div>
      <div className="type">
        <p>Type : </p>
        <p></p>
      </div>
      <div className="buttons">
        <div onClick={handleCancel}>
          Cancel
        </div>
      </div>
    </div>
    <div ref={sureAdd} className="sureAdd">
      <p>Please enter a title for the event</p>
      <input ref={inputEvent} type="text" />
      <div className="buttons">
        <div onClick={handleCancel} style={{background : 'rgb(205, 53, 59)', color : '#fff'}}>cancel</div>
        <div style={{background : '#4eb63d', color : '#fff'}}>Add</div>
      </div>
    </div>
  </div>
  )
}

export default Calendar