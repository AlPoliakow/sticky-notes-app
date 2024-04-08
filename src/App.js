import React, { Component } from "react";
import Header from "./Header.js";
import NotesList from "./NotesList.js";

class App extends Component {
  state = {
    notes: [
      {
        id: Date.now(),
        title: "",
        description: "",
        doesMatchSearch: true
      }
    ],
    searchText: ""
  };

  // Create a new note
  addNote = () => {
    const newNote = {
      id: Date.now(),
      title: "",
      description: "",
      doesMatchSearch: true
    };
    // Add new note to existing notes array in state
    this.setState({ notes: [newNote, ...this.state.notes] });
  };

  // Edit a specific note
  onType = (editNoteId, updatedKey, updatedValue) => {
    //editNoteId = id of note that is edited
    //updatedKey = title or descrition field
    //updatedValue = value of input for title or description
    //map over notes
    const updatedNotes = this.state.notes.map((note) => {
      if (note.id !== editNoteId) {
        return note;
      } else {
        if (updatedKey === "title") {
          note.title = updatedValue;
          return note;
        } else {
          note.description = updatedValue;
          return note;
        }
      }
    });
    this.setState({ notes: updatedNotes });
  };

  // Search notes and update search text
  onSearch = (text) => {
    const newSearchText = text.toLowerCase();
    const updatedNotes = this.state.notes.map((note) => {
      if (!newSearchText) {
        note.doesMatchSearch = true;
        return note;
      } else {
        const title = note.title.toLowerCase();
        const description = note.description.toLowerCase();
        const titleMatch = title.includes(newSearchText);
        const descriptionMatch = description.includes(newSearchText);
        note.doesMatchSearch = titleMatch || descriptionMatch;
        return note;
      }
    });
    // Update search text
    this.setState({
      notes: updatedNotes,
      searchText: newSearchText
    });
  };

  // Delete a note
  removeNote = (noteId) => {
    const updatedNotes = this.state.notes.filter((note) => note.id !== noteId);
    this.setState({
      notes: updatedNotes
    });
  };

  // Save note content
  componentDidUpdate() {
    const notesString = JSON.stringify(this.state.notes);
    localStorage.setItem("savedNotes", notesString);
  }

  componentDidMount() {
    const notesString = localStorage.getItem("savedNotes");
    if (notesString) {
      const savedNotes = JSON.parse(notesString);
      this.setState({ notes: savedNotes });
    }
  }

  render() {
    return (
        <div>
          {/*pass searchText to Header component*/}
          {/*make header aware that addNote exists*/}
          {/*make header aware that onSearch exists*/}
          <Header
              onSearch={this.onSearch}
              addNote={this.addNote}
              searchText={this.state.searchText}
          />
          {/*pass notes to NotesList component*/}
          {/*need to make onType function in notesList*/}
          <NotesList
              removeNote={this.removeNote}
              onClick={this.onClick}
              notes={this.state.notes}
              onType={this.onType}
          />
        </div>
    );
  }
}

export default App;
