import React, { useState } from "react";
import Navbar from "../Components/Nav";
import ContactList from "../Components/ContactList";
import Mudal from "../Components/Mudal";

function Home() {
  const [mudal, setMudal] = useState(false);
  const [contacts, setContacts] = useState([]);

  return (
    <>
      <Navbar mudal={mudal} setMudal={setMudal} setContacts={setContacts}/>
      <ContactList mudal={mudal} setMudal={setMudal} setContacts={setContacts}  contacts={contacts} />
      <Mudal mudal={mudal} setMudal={setMudal} />
    </>
  );
}

export default Home;
