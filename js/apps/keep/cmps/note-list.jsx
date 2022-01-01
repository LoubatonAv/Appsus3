import { NotePreview } from '../cmps/note-preview.jsx'
import { Loader } from '../cmps/Loader.jsx'
// const { NavLink, Route } = ReactRouterDOM

// function onAddNote() {
//   return <div className="card about-card">
//     <span>onAddNote:</span>
//     <ul className=" clean-list">
//       <li>To be a full-stack Ninja</li>
//       <li>To Create Beutiful Things</li>
//     </ul>
//   </div>
// }


export function NoteList({...props}) {
  // console.log('props: ', props)
  if (!props.notes) return <Loader />
  return (
    <section className="note-list">
      <button onClick={props.toggleNoteModal} className="note-preview card" ><i className="fa fa-plus"></i></button>
      

      {props.notes.map(note => <NotePreview note={note} onRemoveNote={props.onRemoveNote} key={note.id} onToggleTodoDone={props.onToggleTodoDone} onRemoveTodo={props.onRemoveTodo} />)}
    </section>
  )
}


{/* <button className="note-preview card" onClick={() => props.onAddNote()} ><i className="fa fa-plus"></i></button> */ }


// <NavLink  className="note-preview card clean-link" to='/Note/add' ></NavLink>
//       <Route component={onAddNote} path="/Note/add" />