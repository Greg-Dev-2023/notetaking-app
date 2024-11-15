import React, { useState } from 'react';
import NoteList from './NoteList';
import NoteForm from './NoteForm';

const App = () => {
    const [notes, setNotes] = useState([]);

    const addNote = (note) => {
        setNotes([...notes, note]);
    };

    return (
        <div>
            <h1>Notetaking App</h1>
            <NoteForm addNote={addNote} />
            <NoteList notes={notes} />
        </div>
    );
};

export default App;
