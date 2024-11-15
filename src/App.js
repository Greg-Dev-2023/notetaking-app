import React, { useState } from 'react';
import './App.css';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';

function App() {
  const [notes, setNotes] = useState([]);
  const [editingNote, setEditingNote] = useState(null);

  const addNote = (noteData) => {
    setNotes([...notes, { ...noteData, id: Date.now() }]);
  };

  const updateNote = (updatedNote) => {
    setNotes(notes.map(note => 
      note.id === updatedNote.id ? updatedNote : note
    ));
    setEditingNote(null);
  };

  const deleteNote = (noteId) => {
    if (window.confirm('Are you sure you want to delete this note?')) {
      setNotes(notes.filter(note => note.id !== noteId));
      if (editingNote?.id === noteId) {
        setEditingNote(null);
      }
    }
  };

  const startEditing = (note) => {
    setEditingNote(note);
  };

  const cancelEditing = () => {
    setEditingNote(null);
  };

  return (
    <div className="App">
      <div className="stars-1"></div>
      <div className="stars-2"></div>
      <div className="stars-3"></div>
      <header className="App-header">
        <h1>Note Taking App</h1>
      </header>
      <main className="App-main">
        <NoteForm 
          addNote={addNote} 
          editingNote={editingNote}
          updateNote={updateNote}
          cancelEditing={cancelEditing}
        />
        <NoteList 
          notes={notes} 
          onEdit={startEditing}
          onDelete={deleteNote}
        />
      </main>
    </div>
  );
}

export default App;
