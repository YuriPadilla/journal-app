import './App.css';
import { useState } from 'react';
import { uid } from 'uid';

import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "./components/Form";
import ShowedNotes from "./components/ShowedNotes";

export default function App() {
  const [notes, setNotes] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData)

    setNotes([{id: uid(), motto: data.inputMotto, textNotes: data.inputNotes}, ...notes]);
    console.log(notes);
}

  return (
    <>
      <Header>JOURNAL</Header>
      <main>
        <Form onSubmit={handleSubmit}></Form>
        <ShowedNotes notes={notes}></ShowedNotes>
      </main>
      <Footer>Journal App - 2023</Footer>
    </>
  );
}
