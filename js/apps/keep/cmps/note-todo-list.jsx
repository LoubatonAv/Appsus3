import { Loader } from '../../../cmps/Loader.jsx'
const { Link, Route } = ReactRouterDOM

function getDate(doneAt) {
  if (!doneAt) return <Loader />
  console.log('doneAt: ', doneAt)
};

export function NoteTodoList({ todo }) {
  if (!todo) return <Loader />
  // console.log(todo)
  // console.log('doneAt: ', todo.doneAt)
  return <ul className="clean-list">

    {todo.doneAt && <section className="flex space-between todo-crossed"> <li>{todo.txt} </li> <button>x</button></section>}
    {!todo.doneAt && <section className="flex space-between"> <li>{todo.txt} </li> <button className="to-do-btn" onClick={getDate(todo.doneAt)}>x</button></section>}

  </ul>;
}
