import { NotePreview } from './note-preview.jsx'
import { Loader } from '../../../cmps/Loader.jsx'

export function NoteList({ notes, onRemoveNote }) {
  // console.log(notes)
  if (!notes) return <Loader />
  return (
    <section className="note-list">
      {notes.map(note => <NotePreview note={note}  onRemoveNote={onRemoveNote} key={note.id} />)}
      <button>add note</button> 
    </section>
  )
}