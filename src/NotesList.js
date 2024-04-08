import React from "react";
import Note from "./Note.js";

const NotesList = (props) => {
    // Filter notes for those matching the search
    const keepSearchMatches = (note) => note.doesMatchSearch;
    const searchMatches = props.notes.filter(keepSearchMatches);
    const renderNote = (note) => (
        <Note removeNote={props.removeNote} onType={props.onType} note={note} key={note.id} />
    );
    const noteElements = searchMatches.map(renderNote);
    return <ul className="notes-list">{noteElements}</ul>;
};

export default NotesList;
