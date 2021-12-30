import { NotePreview } from './note-preview.jsx'
import { Loader } from '../../../cmps/Loader.jsx'

export function NoteList({ ...props }) {
  // console.log('props: ', props)
  if (!props.notes) return <Loader />
  return (
    <section className="note-list">
      {props.notes.map(note => <NotePreview note={note}  onRemoveNote={props.onRemoveNote} key={note.id} onRemoveTodo={props.onRemoveTodo}/>)}
      <button className="note-preview card"><i className="fa fa-plus"></i></button> 
    </section>
  )
}