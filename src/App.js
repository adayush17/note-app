import { useEffect, useState } from "react";
import "./App.scss";
import NoteContainer from "./components/NoteContainer/NoteContainer";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {

  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes-app")) || []
    );

  const addNotes = (color) =>{
    const tempNotes = [...notes]

    tempNotes.push({
      id: Date.now() + "" + Math.floor(Math.random()*70),
      text: "",
      time: Date.now(),
      color,
    })
    setNotes(tempNotes);
  }

  const deleteNote = (id) =>{
    const tempNotes = [...notes]

    const index = tempNotes.findIndex(item=>item.id===id)
    if(index<0) return;

    tempNotes.splice(index, 1);
    setNotes(tempNotes);
  }

  useEffect(()=>{
    localStorage.setItem('notes-app',JSON.stringify(notes))
  })

  const updateText = (text, id) =>{
    const tempNotes = [...notes];

    const index = tempNotes.findIndex((item) => item.id === id);
    if(index<0) return;

    tempNotes[index].text = text;
    setNotes(tempNotes);
  }

  return (
    <div className="App">
      <Sidebar addNotes ={addNotes} />
      <NoteContainer 
        notes={notes} 
        deleteNote={deleteNote}
        updateText={updateText}
      />
    </div>
  );
}

export default App;
