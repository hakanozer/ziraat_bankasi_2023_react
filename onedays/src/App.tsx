import React, { useEffect, useState } from 'react'
import { cities } from './services/sample'
import SendButton from './components/SendButton'
import Navbar from './components/Navbar'
import Login from './components/Login'

function App() {

  const name = "Ali"
  //name = "Erkan"
  var surname = "Bilmem"
  surname = "Bilsin"

  // using state
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  

  // functions
  // arrow
  const fncDataSet = (evt:React.ChangeEvent<HTMLInputElement>) => {
    const item = evt.target.value
    surname = item
    console.log('surname', surname)
    console.log('item.length', item.length)
    setEmail(item)
  }

  // send fnc
  const sendForm = (evt: React.FormEvent) => {
    evt.preventDefault()
    console.log( email, password )
  }


  
  useEffect(() => {
    console.log("Call - 1")
  }, [])

  useEffect(() => {
    console.log("Call - 2")
  }, [])

  useEffect(() => {
    console.log(email)
  }, [email])

  const [arr, setArr] = useState<string[]>(["Çiğ Köfte"])
  const [title, setTitle] = useState<string | null>()
  useEffect(() => {
   
    var arrStr: string[] = [...arr]
    arrStr.push("Adana Kebap")
    arrStr.push("Lahmacun")
    arrStr.push("Sütlaç")
    arrStr.push("Çay")
    arrStr.push("Soda")
    setArr(arrStr)

    cities.push(
      {
        name: 'Antalya',
        plaka: 7,
        nufus: 3000000,
        status: true
      }
    )

  }, [])
  

  const customFcnSave = () => {
    console.log("customFcnSave Call")
  }
  
  const [search, setSearch] = useState('')

  return (
    <>
      <Navbar setSearch={setSearch} />
      <Login 
      customFcnSave={customFcnSave} 
      sendForm={sendForm} 
      setEmail={setEmail} 
      setPassword={setPassword} />

      <h2>{search}</h2>

      { arr && arr.length > 0 &&     
        <ul>
        { arr.map( (item, index) =>
          <li key={index}> {item} </li>
        )}
        </ul>
      }

      { title &&
        <div> {title.length} </div>
      }

      { cities.map( (item, index) =>
        <div key={index}> { item.name } - { item.nufus } - { item.plaka } - { item.status.toString() } </div>
      )}

    </>
  )
}

export const theme = "light"
export const rowCount = 50
export default App