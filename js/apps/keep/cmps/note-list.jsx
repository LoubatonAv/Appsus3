import { NotePreview } from './note-preview.jsx'
import { Loader } from '../../../cmps/Loader.jsx'

export function NoteList({ notes, onSelectNote }) {
  console.log(notes)
  if (!notes) return <Loader />
  return (
    <section className="note-list">
      <h1>note list</h1>
      {notes.map(note => <NotePreview key={note.id} note={note} />)} 
    </section>
  )
}