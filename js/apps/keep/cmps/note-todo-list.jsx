import { Loader } from '../../../cmps/Loader.jsx'
const { Link, Route } = ReactRouterDOM

function onDeleteTodo(todoKey) {
  console.log('toDo to delete: ', todoKey)
};

export function NoteTodoList({ todo, todoKey }) {
  if (!todo) return <Loader />
  let done = (todo.doneAt) ? 'todo-done' : ''
  return <ul className="clean-list">
    <li className={`flex space-between ${done}`}>{todo.txt} <button className=" to-do-btn" onClick={() => onDeleteTodo(todoKey)}><i className="fa fa-trash"></i></button></li> 
  </ul>;
}
