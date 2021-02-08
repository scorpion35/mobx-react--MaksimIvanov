import { observer } from 'mobx-react';
import React, { FC } from 'react'
import AddNewNote from './AddNewNote'
import { useNotesStore } from './stores/NotesContext'
import { INote } from './stores/NotesStore';

const ShowNotes: FC = observer(() => {
  const notesStore = useNotesStore();

  return <>
          <ul>
            {notesStore.notes.map((note: INote) => 
              {
                console.log(note);
                return <li key={note.id}>{note.text}</li>;
              }
            )}
          </ul>
          <AddNewNote />
        </>;
})

export default ShowNotes;
