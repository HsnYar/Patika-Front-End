import { useState } from 'react';
import Textarea from './Components/Textarea';
import Header from './Components/Header';
import SearchBar from './Components/SearchBar';
import Notes from './Components/Notes';
import './App.css';

function App() {
    const [notes, setNotes] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const addNote = (note) => {
        setNotes([...notes, note]);
    };

    const filteredNotes = notes.filter(note =>
        note.text.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="app-container">
            <Header />
            <SearchBar setSearchTerm={setSearchTerm} />
            <Textarea addNote={addNote} />
            <Notes notes={filteredNotes} />
        </div>
    );
}

export default App;
