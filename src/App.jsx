import React, { useState } from 'react';
import Header from './Components/Header';
import CreateArea from './Components/CreateArea';
import Note from './Components/Note';
import SearchBar from './SearchBar'; // Import the SearchBar component

export default function App() {
  const [notes, setNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); // Add searchTerm state

  function addNote(newNote) {
    setNotes(prevNotes => [...prevNotes, newNote]);
  }

  function deleteNote(id) {
    setNotes(prevNotes => prevNotes.filter((note, index) => index !== id));
  }

  // Search functionality
  function searchNotes(searchTerm) {
    const filteredNotes = notes.filter(
      note =>
        note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        note.content.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return filteredNotes;
  }

  const filteredNotes = searchNotes(searchTerm); // Filter notes based on search term

  return (
    <div className="App">
      
      <Header />
      <SearchBar onSearch={setSearchTerm} />
      <CreateArea onAdd={addNote} />
       {/* Pass the setSearchTerm function */}
      {filteredNotes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={deleteNote}
        />
      ))}
    </div>
  );
}
