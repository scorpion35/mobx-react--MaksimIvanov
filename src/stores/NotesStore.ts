import { nanoid } from "nanoid";

export interface INote {
  text: string,
  id: string
}

export interface INotesStore {
  notes: INote[],
  addNote: (text: string) => void,
  removeNote: (id: string) => void
}

export const createNotesStore = () => {
  const notesStore: INotesStore = {
    notes: [],
    addNote: (text: string) => {
      const id = nanoid();
      console.log(`Length: ${notesStore.notes.length + 1} | [${id}] ${text}`);
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
  };

  return notesStore;
};
