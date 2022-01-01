import { NoteService } from '../services/note-service.js'


export class NoteTextInput extends React.Component {
  state = {
    info: {
      type: 'note-txt',
      txt: '',
      title: '',
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

    render() {
      // console.log(this.state);
      const { txt, title } = this.state.info
      return (
        <div className="note-add-trash-container">
          <form onSubmit={this.onSaveNote}>
            <label htmlFor='title'>insert a title</label>
            <input
              ref={this.inputRef}
              name='title'
              type='text'
              id='title'
              value={title}
              onChange={this.handleChange}
            />
            <label htmlFor='txt'>insert your text here:</label>

            <textarea id='txt' name='txt' value={txt} onChange={this.handleChange} />
            <button className='btn primary-btn'>✔</button>
          </form>
        </div>
      );
    }
  }