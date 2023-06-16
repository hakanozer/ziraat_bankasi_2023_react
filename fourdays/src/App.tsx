import React, { useContext, useEffect, useState, useRef, useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StateType } from './Store'
import { NoteAction } from './actions/NoteAction';
import { NoteType } from './types/NoteType';
import { Note } from './models/Note';
import { DataContext, IContext } from './context/DataContext';
import Helmet from 'react-helmet'
import { allCall } from './Util';
import configData from './config.json'
import { decrypt, encrypt } from './utils/EncDec';
import $ from 'jquery'
import { dataReducer, numx  } from './utils/dataReducer';

function App() {

  const dataRef = useRef<HTMLInputElement>(null)
  const btnRef = useRef<HTMLButtonElement>(null)

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
    if (dataRef.current && btnRef.current) {
       dataRef.current.focus()
       dataRef.current.style.borderColor = "#ff00ff"
       //dataRef.current.style.display = 'none'
       btnRef.current.style.borderColor = "#ff00ff"
    }

    // jquery
    $("#txtId").slideUp()

    // useDispatch
    dispatchData("add")
   
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
    console.log(configData.BASE_URL)
    const cipherText = encrypt("12345")
    console.log(cipherText)
    const plainText = decrypt(cipherText)
    console.log(plainText)
  }, [])
  

  const [state, dispatchData] = useReducer(dataReducer, numx)
  

  return (
    <>
    <Helmet>
      <title>App Page</title>
      <meta name="description" content="App application" />
    </Helmet>
    <hr></hr>
    <input ref={dataRef} className='form-control' placeholder='Data'></input>
    <hr></hr>
    <h3>{state}</h3>
    <hr></hr>
    <h3> {  } </h3>
    <h3 id='txtId' > { process.env.REACT_APP_APP_TITLE } </h3>
    <h2> { configData.API_KEY } </h2>
    <h1> { contextData.title } </h1>
    <h1> { contextData.color } </h1>
    <button onClick={contextChange}>Change</button>
    <hr></hr>
    <button ref={btnRef} onClick={addNote}>Add</button>
    <div>{ JSON.stringify(noteData) }</div>
    </>
  );
}

export default App;
