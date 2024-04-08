import React from "react";

const Note = (props) => {
    // Edit the title
    const updateTitle = (e) => {
        const updatedValue = e.target.value;
        const editNoteId = props.note.id;
        props.onType(editNoteId, "title", updatedValue);
    };
    // Edit the description
    const updateDescription = (e) => {
        const updatedValue = e.target.value;
        const editNoteId = props.note.id;
        props.onType(editNoteId, "description", updatedValue);
    };
    // Delete a note
    const clickDelete = () => {
        props.removeNote(props.note.id)
    }
    return (
        <li className="note">
            {/*Set the title and description value attributes in Note*/}
            <input
                className="note__title"
                type="text"
                placeholder="Title"
                value={props.note.title}
                onChange={updateTitle}
            />
            <textarea
                className="note__description"
                placeholder="Description..."
                value={props.note.description}
                onChange={updateDescription}
            />
            <span className="note__delete" onClick={clickDelete}>X</span>
        </li>
    );
};

export default Note;
