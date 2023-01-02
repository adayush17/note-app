import React from 'react'
import "./Note.scss"
import deleteIcon from "../../assets/delete.png"

let timer = 500, timeout

const Note = (props) => {

  const formatDate=(value)=>{
    const monthName = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ]

    if(!value) return "";

    const date = new Date(value);

    let hrs=date.getHours();
    let amPm = hrs>12 ? "Pm":"AM";
    hrs = hrs? hrs:"12";
    hrs = hrs>12 ? hrs-24:hrs;

    let min = date.getMinutes();
    min = min<10 ? "0"+min:min;

    let day = date.getDate();
    const month = monthName[date.getMonth()];

    return `${hrs}:${min} ${amPm} ${day}, ${month}`
  }

  const debounce=(func)=>{
    clearTimeout(timeout)
      timeout=setTimeout(func, timer);
  }

  const updateText=(text, id)=>{
    debounce(()=>props.updateText(text, id))
  }

  return (
    <div className="note" style={{backgroundColor:props.note.color}}>
      <textarea className="note_text" placeholder="Write your text here..." defaultValue={props.note.text}
        onChange={(event) => updateText(event.target.value, props.note.id)}
      />
      <div className="footer">
      <p>{formatDate(props.note.time)}</p>
      <img 
        src={deleteIcon} 
        alt="Delete" 
        onClick={()=> props.deleteNote(props.note.id)}
      />
      </div>
    </div>
  )
}

export default Note