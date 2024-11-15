import React, { useState } from 'react';

const Note = ({ note, onEdit, onDelete }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleClick = (e) => {
        if (!e.target.closest('.note-actions')) {
            setIsExpanded(!isExpanded);
        }
    };

    const handleDelete = (e) => {
        e.stopPropagation();
        onDelete(note.id);
    };

    const handleEdit = (e) => {
        e.stopPropagation();
        onEdit(note);
    };

    return (
        <li className={`note ${isExpanded ? 'expanded' : ''}`} onClick={handleClick}>
            <div className="note-header">
                <h3 className="note-title">{note.title}</h3>
                <div className="note-actions">
                    <button 
                        className="action-button edit-button" 
                        onClick={handleEdit}
                        title="Edit note"
                    >
                        ✎
                    </button>
                    <button 
                        className="action-button delete-button" 
                        onClick={handleDelete}
                        title="Delete note"
                    >
                        ×
                    </button>
                    <span className="expand-indicator" title={isExpanded ? "Collapse" : "Expand"}>
                        {isExpanded ? '▼' : '▶'}
                    </span>
                </div>
            </div>
            <div className={`note-description ${isExpanded ? 'show' : ''}`}>
                {note.description}
            </div>
        </li>
    );
};

export default Note;
