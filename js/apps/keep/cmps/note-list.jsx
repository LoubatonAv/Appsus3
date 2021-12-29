import { NotePreview } from './note-preview.jsx'
import { Loader } from '../../../cmps/Loader.jsx'

export function NoteList({ notes, onRemoveNote }) {
  console.log(notes)
  if (!notes) return <Loader />
  return (
    <section className="note-list">
      {notes.map(note => <NotePreview note={note} key={note.id} onRemoveNote={onRemoveNote}  />)}
      <button>add note</button> 
    </section>
  )
}