import React from 'react';
import { Note } from '../models/Note';

interface NoteDisplayProps {
  notes: Note[];
  onDelete: (id: string) => void;
}

const NoteDisplay: React.FC<NoteDisplayProps> = ({ notes, onDelete }) => {
  return (
    <div className="max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Notes</h2>
      {notes.map((note) => (
        <div key={note.id} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h5 className="mb-4 text-xl font-semibold">{note.title}</h5>
          <p className="mb-4">{note.content}</p>
          <button onClick={() => onDelete(note.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default NoteDisplay;
