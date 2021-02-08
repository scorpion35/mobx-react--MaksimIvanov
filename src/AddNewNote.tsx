import React, { FC, useRef, useState } from 'react';
import { useNotesStore } from './stores/NotesContext';

const AddNewNote: FC = () => {
  const notesStore = useNotesStore();
  const [newNote, setNewNote] = useState<string>(`${notesStore.notes.length}`)
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <p>AddNewNote notes length = {notesStore.notes.length}</p>
      <input
        ref={inputRef}
        type="text"
        placeholder="Add new note"
        value={newNote}
        onChange={e => setNewNote(e.target.value)}
        />
      <button onClick={
        () => {
          notesStore.addNote(newNote);
          inputRef.current!.focus();
        }
      }>Add new note</button>
    </div>
  )
};

export default AddNewNote;
