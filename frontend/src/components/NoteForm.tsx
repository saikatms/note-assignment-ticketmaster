import React, { useState } from 'react';

interface NoteFormProps {
  onSubmit: (title: string, content: string) => void;
}

const NoteForm: React.FC<NoteFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(title, content);
    setTitle('');
    setContent('');
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white shadow-md rounded p-4">
        <h5 className="text-xl font-semibold mb-4">Create a New Note</h5>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="block w-full border-gray-200 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:border-blue-500"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            className="block w-full border-gray-200 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:border-blue-500"
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default NoteForm;
