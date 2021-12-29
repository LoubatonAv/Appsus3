import { NoteTodoList } from 'note-todo-list.jsx'

const { Link, Route } = ReactRouterDOM



export function NoteUIButtons({ note, onRemoveNote }) {
  // console.log('note: ', note)
  // console.log('note.id: ', note.id)
  // console.log('remove note: ', onRemoveNote)

  return <div className="ui-buttons container">
    <button className="btn primary-btn" onClick={() => onRemoveNote(note.id)}>
      <i className="fa fa-trash"></i></button>
    <button className="btn primary-btn">
      <i className="fa fa-align-center"></i></button>
    <button className="btn primary-btn"> <i className="fa fa-paint-brush"></i></button>
    <button className="btn primary-btn">pin</button>
    <button className="btn primary-btn"><i className="fa fa-share-alt"></i></button>
  </div>

}
