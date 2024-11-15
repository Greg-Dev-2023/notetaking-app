import React, { useState, useEffect } from 'react';

const NoteForm = ({ addNote, editingNote, updateNote, cancelEditing }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (editingNote) {
            setTitle(editingNote.title);
            setDescription(editingNote.description);
        } else {
            setTitle('');
            setDescription('');
        }
    }, [editingNote]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingNote) {
            updateNote({
                ...editingNote,
                title,
                description
            });
        } else {
            addNote({ title, description });
        }
        setTitle('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter title..."
                    required
                />
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter description..."
                    required
                />
                <div className="form-buttons">
                    <button type="submit">
                        {editingNote ? 'Update Note' : 'Add Note'}
                    </button>
                    {editingNote && (
                        <button 
                            type="button" 
                            onClick={cancelEditing}
                            className="cancel-button"
                        >
                            Cancel
                        </button>
                    )}
                </div>
            </div>
        </form>
    );
};

export default NoteForm;
