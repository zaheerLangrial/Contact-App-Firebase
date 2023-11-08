import React, { useState } from 'react'
import Navbar from '../Components/Nav'
import ContactList from '../Components/ContactList'
import Mudal from '../Components/Mudal'

function Home() {
    const [mudal , setMudal] = useState(false)
  return (
    <>
    <Navbar mudal={mudal} setMudal={setMudal}/>
    <ContactList mudal={mudal} setMudal={setMudal}  />
    <Mudal mudal={mudal} setMudal={setMudal} />
    </>
  )
}

export default Home