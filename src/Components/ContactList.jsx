import { collection, getDocs, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../Config/Firebase";
import ContactCard from "./ContactCard";

function ContactList(props) {
  const { setMudal } = props;

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    getContacts();
  }, []);

  const getContacts = async () => {
    try {
      const contactRef = collection(db, "contacts");
      onSnapshot(contactRef, (snapShot) => {
        const contactLists = snapShot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setContacts(contactLists);
        return contactLists;
      });
    } catch (error) {
      console.log("Error agya e oye..", error);
    }
  };
  return (
    <div className="px-3">
      <ul>
        {contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
}

export default ContactList;
