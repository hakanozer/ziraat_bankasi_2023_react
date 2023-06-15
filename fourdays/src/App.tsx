import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StateType } from './Store'
import { NoteAction } from './actions/NoteAction';
import { NoteType } from './types/NoteType';
import { Note } from './models/Note';
import { DataContext, IContext } from './context/DataContext';
import Helmet from 'react-helmet'
import { allCall } from './Util';

function App() {

  const { getItem, setItem } = useContext(DataContext)
  const [contextData, setContextData] = useState<IContext>(getItem)

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
  

  const contextChange = () => {
    const itm: IContext = {
      title: 'Site Title',
      color: '#00ff00'
    } 
    setItem(itm)
    setContextData(itm)
  }

  useEffect(() => {
    allCall()
  }, [])
  


  return (
    <>
    <Helmet>
      <title>App Page</title>
      <meta name="description" content="App application" />
    </Helmet>
    <h1> { contextData.title } </h1>
    <h1> { contextData.color } </h1>
    <button onClick={contextChange}>Change</button>
    <hr></hr>
    <button onClick={addNote}>Add</button>
    <div>{ JSON.stringify(noteData) }</div>
    </>
  );
}

export default App;
