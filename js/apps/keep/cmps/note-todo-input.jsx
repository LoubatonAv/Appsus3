import { NoteService } from '../services/Note.service.js'


export class NoteTodoInput extends React.Component {
  state = {
    txt: ''
  };


  handleChange = ({ target }) => {
    // console.log(target)
    const field = target.name;
    const value = target.value;
    this.setState((prevState) => ({
      txt:  value,
    }));
  };

  onAddTodo = (ev) => {
    ev.preventDefault();

    const { txt } = this.state;
    console.log('adding todo:', txt)
    this.props.addTodo(txt)
    this.setState({txt: ''});
    };

    render() {
      // console.log(this.state);
      const { txt } = this.state
      return (
        <div className="note-add-trash-container">
          <form onSubmit={this.onAddTodo}>

            <label htmlFor='txt'>insert a todo line here</label>
            <input
              ref={this.inputRef}
              name='txt'
              type='text'
              id='txt'
              value={txt}
              onChange={this.handleChange}/>
            
            <button className='btn primary-btn'>add</button>
          
          </form>
        </div>
      );
    }
  }