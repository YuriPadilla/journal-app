import './App.css';
import { useState } from 'react';
import { uid } from 'uid';

import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "./components/Form";
import ShowedNotes from "./components/ShowedNotes";
import Filters from "./components/Filters"

export default function App() {
  const [notes, setNotes] = useState([]);
  const favoriteNotes = notes.filter((note) => note.isFavorite === true);
  const [activeNotes, setActiveNotes] = useState("All Notes");

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const currentDate = new Date().toLocaleDateString("de-DE", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    console.log(currentDate);

    setNotes([{id: uid(), date: currentDate, motto: data.inputMotto, textNotes: data.inputNotes, isFavorite: false}, ...notes]);

    event.target.reset();
    event.target.elements.inputMotto.focus();
  }

  function handleActiveNotes(notesToShow = "All Notes") {
    setActiveNotes(notesToShow);
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
        <Filters onActiveNotes= {handleActiveNotes} notes={notes} favoriteNotes={favoriteNotes}/>
        <ShowedNotes notes={activeNotes === "All Notes" ? notes : favoriteNotes} onFavorite={handleFavorite}/>
      </main>
      <Footer>Journal App - 2023</Footer>
    </>
  );
}
