import { useState, useEffect } from 'react';
import { getNotes } from '../../utilities/notes-api.js';
import CreateNoteForm from "../../components/CreateNoteForm/CreateNoteForm.jsx";
import NoteList from "../../components/NoteList/NoteList.jsx";

export default function HomePage() {
  const [notes, setNotes] = useState(null);

  useEffect(() => {
    getNotes().then(data => setNotes(data));
  }, []);

  return (
    <div>
      <CreateNoteForm notes={notes} setNotes={setNotes} />
      <NoteList notes={notes} />
    </div>
  );
}