import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NoteDisplay from './components/NoteDisplay';
import NoteForm from './components/NoteForm';
import { Note } from './models/Note';

const App: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      //Have to add the base url in env variable
      const response = await axios.get('http://localhost:3000/api/notes');
      setNotes(response.data);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  const handleNoteSubmit = async (title: string, content: string) => {
    try {
      //Have to add the base url in env variable
      const response = await axios.post('http://localhost:3000/api/notes', { title, content });
      setNotes([...notes, response.data]);
    } catch (error) {
      console.error('Error adding note:', error);
    }
  };

  const handleNoteDelete = async (id: string) => {
    try {
      //Have to add the base url in env variable
      await axios.delete(`http://localhost:3000/api/notes/${id}`);
      setNotes(notes.filter((note) => note.id !== id));
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  return (
    <div>
      <h1>Notes App</h1>
      <NoteForm onSubmit={handleNoteSubmit} />
      <NoteDisplay notes={notes} onDelete={handleNoteDelete} />
    </div>
  );
};

export default App;
