export interface INote {
  text: string,
  id: string
}

export interface INotesStore {
  notes: INote[],
  addNote: (text: string) => void,
  removeNote: (id: string) => void
}
