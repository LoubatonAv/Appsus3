import { NoteTodoList } from 'note-todo-list.jsx'
import { NoteUIButtons } from 'note-ui-buttons.jsx'

const { Link, Route } = ReactRouterDOM



export function NotePreview({ ...props}) {
  // console.log('props: ', props)
  // console.log('note: ', note)
// console.log('note.id: ', note.id)
// console.log('remove note: ', onRemoveNote)
  let note = props.note;
  switch (note.type) {
    case 'note-txt':
      return <article className={`note-preview card`} ><div>
      <h2>{note.info.txt}</h2>
      {note.isPinned && <h1>PINNED </h1> }</div>
      <div><NoteUIButtons note={note}  onRemoveNote={props.onRemoveNote} key={note.id}/></div>
    </article>
      
    case 'note-img':
      return <article className={`note-preview card`} >
        <h2>{note.info.title} </h2>
      <img src={note.info.url} alt="img" />
      {note.isPinned && <h1>PINNED </h1> }
      <NoteUIButtons note={note}  onRemoveNote={props.onRemoveNote} key={note.id}/>
    </article>

    case 'note-todos':
      return <article className={`note-preview card`} >
      <h2>{note.info.label} </h2>
      <section className="note-list">
      {note.info.todos.map((todo) => <NoteTodoList key={todo.id} todo={todo} note={note}  onRemoveTodo={props.onRemoveTodo} onToggleTodoDone={props.onToggleTodoDone} todoKey={todo.id}/>)}
      {note.isPinned && <h1>PINNED </h1> } 
    </section>
    <div><NoteUIButtons note={note}  onRemoveNote={props.onRemoveNote} key={note.id}/></div>
    </article>
    
    default:
      return null;
  }
}
