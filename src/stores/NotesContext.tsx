import { useLocalObservable } from 'mobx-react';
import { nanoid } from 'nanoid';
import { FC, createContext, useContext } from 'react';
import { INotesStore } from './NotesStore';

export const NotesContext = createContext<INotesStore>({
  notes: [{
    id: "some default id",
    text: "some default text"
  }],
  addNote: () => {console.log("add note default log")},
  removeNote: () => {console.log("remove note default log")}
});

export const NotesProvider: FC = ({children}) => {
  const notesStore = useLocalObservable<INotesStore>(() => ({
    notes: [],
    addNote: (text: string) => {
      const id = nanoid();
      notesStore.notes.push({
        text: text,
        id: id
      });
    },
    removeNote: (id: string) => {
      const noteIndex = notesStore.notes.findIndex(n => n.id === id);

      if (noteIndex < 0) {
        console.log(`Note ID: ${id} not found. Nothing removed.`);
      } else {
        notesStore.notes.splice(noteIndex, 1);
      }
    }
  }));

  return (
    <NotesContext.Provider value={notesStore}>
      {children}
    </NotesContext.Provider>
  );
};

export const useNotesStore = () => useContext(NotesContext);

export default NotesProvider;
