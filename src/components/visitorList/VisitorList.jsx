import React, {useRef} from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import useCalendar from '../../store/Calendar'
import { createEventId } from '../../store/Data'


import './visitorList.css';

const VisitorList = () => {
  const sureDel = useRef();
  const sureUpdate = useRef();
  const sureAdd = useRef();
  const turn = useRef();
  const ScheduleNew = useRef();
  const A1 = useRef();
  const A2 = useRef();
  const B1 = useRef();
  const B2 = useRef();
  const C3 = useRef();
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
    let title = prompt('Please enter a title for the event');
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

  // clickInfo.event.remove();

  const btnToggle = () => {
    turn.current.classList.toggle("on");
    turn.current.classList.toggle("off");
    ScheduleNew.current.classList.toggle("new");
  }

  const pageDel = () => {
    sureDel.current.style.cssText = 'display: flex;';
    sureUpdate.current.style.cssText = 'display: none;';
  }

  const handleEventClick = (clickInfo) => {
    sureUpdate.current.style.cssText = 'display: flex;';
    let ownername = document.querySelector(".visitorList .sureUpdate .owner p:nth-child(2)");
    ownername.innerHTML = clickInfo.event.title;
    
  }

  const clickDelA1 = () => {
    A1.current.innerHTML = '';
  }
  const clickDelA2 = () => {
    A2.current.innerHTML = '';
  }
  const clickDelB1 = () => {
    B1.current.innerHTML = '';
  }
  const clickDelB2 = () => {
    B2.current.innerHTML = '';
  }
  const clickDelC3 = () => {
    C3.current.innerHTML = '';
  }

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
      <div className="cancelation">
        <div>
          <p>Cancelation</p>
          <div ref={turn} onClick={btnToggle} className="btn off">
            <div className="turn"></div>
          </div>
        </div>
      </div>
      <div ref={ScheduleNew} className="timingSpacingSchedule new">
        <div className="timingSchedule">
          <p>9</p>
          <p>10</p>
          <p>11</p>
          <p>12</p>
          <p>1</p>
          <p>2</p>
        </div>
        <div className="SpacingSchedule">
          <p ref={A1} onClick={clickDelA1}>A1</p>
          <p ref={B2} onClick={clickDelB2}>B2</p>
          <p ref={C3} onClick={clickDelC3}>C3</p>
          <p ref={A2} onClick={clickDelA2}>A2</p>
          <p ref={B1} onClick={clickDelB1}>B1</p>
        </div>
      </div>
      <div className="buttons">
        <div onClick={pageDel}>
          Delete
        </div>
        <div onClick={handleCancel}>
          Update
        </div>
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

export default VisitorList