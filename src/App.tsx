import React from 'react';
import './App.scss';
import ShowNotes from './ShowNotes';

import NotesProvider from './stores/NotesContext';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NotesProvider>
          <ShowNotes />
        </NotesProvider>
      </header>
    </div>
  );
}

export default App;
