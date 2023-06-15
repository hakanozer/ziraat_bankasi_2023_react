import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StateType } from './Store'
import { NoteAction } from './actions/NoteAction';
import { NoteType } from './types/NoteType';
import { Note } from './models/Note';

function App() {

  const dispatch = useDispatch()
  const noteData = useSelector( ( obj: StateType ) => obj.NoteReducer)
  const addNote = () => {
    const nt:Note = {
      id: Math.random(),
      title: 'New Title',
      detail: 'New Detail'
    } 
    const sendObj: NoteAction = {
      type: NoteType.NOTE_SAVE,
      payload: nt
    }
    dispatch(sendObj)
  }

  useEffect(() => {
    
  }, [])
  

  return (
    <>
    <button onClick={addNote}>Add</button>
    <div>{ JSON.stringify(noteData) }</div>
    </>
  );
}

export default App;
