import { Loader } from '../../../cmps/Loader.jsx'
const { Link, Route } = ReactRouterDOM

// function onRemoveTodo(todoKey) {
//   console.log('toDo to delete: ', todoKey)
// };

export function NoteTodoList({ ...props }) {
  // console.log('props: ', props)
  let todo= props.todo;
  if (!todo) return <Loader />
  // console.log('props.Key : ', props.todoKey);
  let done = (todo.done) ? 'todo-done' : ''
  return <ul className="clean-list">
    <li className={`flex space-between ${done} todo-list`} > <span className={` todo-list ${done}`} onClick={() => props.onToggleTodoDone(props.todoKey, props.note.id)}> {todo.txt} </span> <button className=" to-do-btn"  onClick={() => props.onRemoveTodo(props.todoKey, props.note.id)}><i className="fa fa-trash"></i></button></li> 
  </ul>;
}
