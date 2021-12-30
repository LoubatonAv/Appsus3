import { Loader } from '../../../cmps/Loader.jsx'
const { Link, Route } = ReactRouterDOM

// function onRemoveTodo(todoKey) {
//   console.log('toDo to delete: ', todoKey)
// };

export function NoteTodoList({ ...props }) {
  console.log('props: ', props)
  let todo= props.todo;
  if (!todo) return <Loader />

  let done = (todo.doneAt) ? 'todo-done' : ''
  return <ul className="clean-list">
    <li className={`flex space-between ${done} todo-list`}>{todo.txt} <button className=" to-do-btn" onClick={() => props.onRemoveTodo(props.Key, props)}><i className="fa fa-trash"></i></button></li> 
  </ul>;
}
