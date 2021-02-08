import { useLocalObservable } from 'mobx-react';
import { FC, createContext, useContext } from 'react';
import { createNotesStore, INotesStore } from './NotesStore';

export const NotesContext = createContext<INotesStore>(createNotesStore());

export const NotesProvider: FC = ({children}) => {
  const notesStore =  useLocalObservable<INotesStore>(() => createNotesStore());
  return (
    <NotesContext.Provider value={notesStore}>
      {children}
    </NotesContext.Provider>
  );
};

export const useNotesStore = () => useContext(NotesContext);

export default NotesProvider;
