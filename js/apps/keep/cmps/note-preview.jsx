import { NoteTodoList } from 'note-todo-list.jsx'

const { Link, Route } = ReactRouterDOM



export function NotePreview({ note, key ,onRemoveNote}) {
console.log('note: ', note)
console.log('key: ', key)
console.log('note.id: ', note.id)
console.log('remove note: ', onRemoveNote)
  // let title = note.title
  // title = title.charAt(0).toUpperCase() + note.title.slice(1); ---- WHY IS THIS NOT WORKING??????
  
  switch (note.type) {
    case 'note-txt':
      return <article className={`note-preview card`} >
      <h2>{note.info.txt}</h2>
      {note.isPinned && <h1>PINNED </h1> }
      <button onClick={() => onRemoveNote(note.id)}>delete</button>
      <button>edit</button>
      <button>change background</button>
      <button>pin</button>
      <button>pin</button>
      <button>email</button>
    </article>
      
    case 'note-img':
      return <article className={`note-preview card`} >
        <h2>{note.info.title} </h2>
      <img src={note.info.url} alt="img" />
      {note.isPinned && <h1>PINNED </h1> }
      <button onClick={() => onRemoveNote(note.id)}>delete</button>
      <button>edit</button>
      <button>change background</button>
      <button>pin</button>
      <button>pin</button>
      <button>email</button>
    </article>

    case 'note-todos':
      return <article className={`note-preview card`} >
      <h2>{note.info.label} </h2>
      <section className="note-list">
      {note.info.todos.map((todo, i) => <NoteTodoList key={i} todo={todo} />)}
      {note.isPinned && <h1>PINNED </h1> } 
    </section>
    <button onClick={() => onRemoveNote(note.id)}>delete</button>
      <button>edit</button>
      <button>change background</button>
      <button>pin</button>
      <button>pin</button>
      <button>email</button>
    </article>
    
    default:
      return null;
  }
}
