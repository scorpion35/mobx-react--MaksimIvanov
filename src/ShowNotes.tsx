import { observer } from 'mobx-react';
import React, { FC, useContext } from 'react'
import AddNewNote from './AddNewNote'
import { NotesContext } from './stores/NotesContext'
import { INote } from './stores/NotesStore';

const ShowNotes: FC = observer(() => {
  const notesStoreContext = useContext(NotesContext);

  return <>
  <p>Show Notes Component = {notesStoreContext.notes.length}</p>
  <ul>
    {notesStoreContext.notes.map((note: INote) => 
      {
        return <li key={note.id}>{note.text}</li>;
      }
    )}
  </ul>
  <AddNewNote />
</>;
});

export default ShowNotes;
