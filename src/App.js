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

    setNotes([{id: uid(), motto: data.inputMotto, textNotes: data.inputNotes, isFavorite: false}, ...notes]);

    event.target.reset();
    event.target.elements.inputMotto.focus();
  }

  function handleFavorite(id) {
    setNotes(notes.map((note) => {
      return (note.id === id ? {...note, isFavorite: !note.isFavorite} : {...note});
    }));
  }

  return (
    <>
      <Header>JOURNAL</Header>
      <main>
        <Form onSubmit={handleSubmit}></Form>
        <ShowedNotes notes={notes} onFavorite={handleFavorite}/>
      </main>
      <Footer>Journal App - 2023</Footer>
    </>
  );
}
