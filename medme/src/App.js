import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState,useEffect } from 'react';
// import axios from axios;
import DateTimePicker from "react-datetime-picker";


function App() {
  const [reminderMsg,setReminderMsg] = useState("")
  const [remindAt,setRemindAt] = useState("")
  const addReminder = ()=>{

  }
  return (
    <div className="App">
      <div className="homepage">
        <div className="homepage-header">
          <h1>Remind 💊</h1>
          <input type="text" placeholder='Enter the prescribed Medicines here.....' value={reminderMsg} onChange={e=> setReminderMsg(e.target.value)} />
          <DateTimePicker
            value={remindAt}
            onChange={setRemindAt}
            minDate={new Date()}
            minutePlaceholder='mm'
            hourPlaceholder='hh'
            dayPlaceholder='DD'
            monthPlaceholder='MM'
            yearPlaceholder='YYYY'
          />
          <div className="button" onClick={addReminder}>Add Reminder</div>
        </div>
      </div>
    </div>
  );
}

export default App;
