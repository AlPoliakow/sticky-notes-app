import React from "react";

const Header = (props) => {
    // Link to search function
    const callSearch = (e) => {
        props.onSearch(e.target.value);
    };
    return (
        <header className="app__header">
            <h1 className="app-header__title">Super Sticky Notes</h1>
            <aside className="app-header__controls">
                <button
                    className="add-new"
                    //event listener
                    onClick={props.addNote}
                >
                    + New Note
                </button>
                <input
                    className="search"
                    type="text"
                    placeholder="Type here to search..."
                    //Set the value attribute of the text input element in Header
                    value={props.searchText}
                    //onChange function for searching
                    onChange={callSearch}
                />
            </aside>
        </header>
    );
};

export default Header;
