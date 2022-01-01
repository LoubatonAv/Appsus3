import { NoteService } from 'note-service.js'
import { NoteTodoInput } from '../cmps/note-todo-input.jsx'
//  from add note we go to todos creator, in there we have a place ot show the input - a render of the note to be , than there is the input section, title and than - the todo component.

export class NoteTodosCreator extends React.Component {
  state = {
    info: {
      type: 'note-todos',
      title: '',
      todos: [],
    },
  };


  handleChange = ({ target }) => {
    // console.log(target)
    const field = target.name;
    const value = target.value;
    this.setState((prevState) => ({
      info: { ...prevState.info, [field]: value },
    }));
  };

  onSaveNote = (ev) => {
    ev.preventDefault();

    const { info } = this.state;
    console.log('saving note:', info)
    NoteService.saveNote(info).then(() => this.props.loadNotes());
    this.props.toggleNoteModal();
  };

  addTodo = (txt) => {
    let currTodos = [...this.state.info.todos]
    console.log('currTodos: ', currTodos)
    currTodos = [...currTodos, txt]
    console.log('after addition: ', currTodos)
    this.setState((prevState) => ({
      info: { ...prevState.info, todos: [...currTodos] },
    }));
  }

  render() {
    console.log('this.state: ', this.state);
    const { todos, title } = this.state.info
    return (
      <div className="note-add-trash-container">
        {/* <article className={`note-preview card`} > */}
          <h2>{title} </h2>
          {todos.length > 0 &&
            <ul className="note-list">
              {todos.map((todo, i) => <li className={`flex space-between todo-list` } key={i} >{todo}</li>)}
            </ul> }
        {/* </article> */}

        <form onSubmit={this.onSaveNote}>

          <label htmlFor='title'>insert a title</label>
          <input
            ref={this.inputRef}
            name='title'
            type='text'
            id='title'
            value={title}
            onChange={this.handleChange} />


          <button className='btn primary-btn'>✔</button>

        </form>

        <NoteTodoInput addTodo={this.addTodo}/>
      </div>
    );
  }
}