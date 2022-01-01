import { NoteTextInput } from './note-txt-input.jsx'
import { NoteImageInput } from './note-img-input.jsx'
import { NoteTodosCreator } from './note-todos-creator.jsx'
import { NoteVideoInput } from './note-vid-input.jsx'


export class AddNote extends React.Component {
  state = {
    type: ``,
  };

  switchInputType = (type) => {
    this.setState({ type: type })
  };

  render() {
  
    // console.log(NoteTextInput);
    return (
      <section className='note-add-screen flex space-between column'>

        {/* title and exit(trash icon) */}
        <div className='flex space-between note-add-trash-container'> <button className="btn primary-btn trash" onClick={this.props.toggleNoteModal}>
          <i className="fa fa-trash "></i></button> <h1>Add A New Note</h1>
        </div>

        {/* input according to choice  - txt*/}
        {this.state.type === 'note-txt' && < NoteTextInput toggleNoteModal={this.props.toggleNoteModal} loadNotes={this.props.loadNotes}/> }

        {this.state.type === 'note-todos' && < NoteTodosCreator toggleNoteModal={this.props.toggleNoteModal} loadNotes={this.props.loadNotes} /> }

        {this.state.type === 'note-img' && < NoteImageInput toggleNoteModal={this.props.toggleNoteModal} loadNotes={this.props.loadNotes}/> }

        {this.state.type === 'note-vid' && < NoteVideoInput toggleNoteModal={this.props.toggleNoteModal} loadNotes={this.props.loadNotes}/> }
        
        {/* input choice buttons */}
        <div className="ui-buttons container">

          <button className="btn primary-btn" name="note-txt" onClick={() => this.switchInputType("note-txt")}>
            <i className="fa fa-align-center"></i></button>

          <button className="btn primary-btn" name="note-todos" onClick={() => this.switchInputType("note-todos")}> <i className="fa fa-paint-brush"></i></button>

          <button className="btn primary-btn" name="note-img" onClick={() => this.switchInputType("note-img")}><i className="fa fa-map-pin"></i></button>

          <button className="btn primary-btn"><i className="fa fa-share-alt" name="note-vid" onClick={() => this.switchInputType("note-vid")}></i></button>
        </div>
      </section>
    );
  }
}

// <div className='review-modal'>
// <form onSubmit={this.onSaveReview} className='review-form'>
//   <label htmlFor='by-fullname'>Full name:</label>
//   <input
//     placeholder='Enter full name'
//     name='fullName'
//     type='text'
//     id='by-fullname'
//     value={fullName}
//     onChange={this.handleChange}
//     autoComplete='off'
//   />
//   <button>Add review</button>
// </form>
// </div>


// 'note-img': {
//   id: '',
//   type: 'note-img',
//   info: {
//     url: '',
//     title: '',
//   },
//   isPinned: false,
// },

// 'note-txt': {
//   id: '',
//   type: 'note-txt',
//   info: {
//     txt: '',
//     title: '',
//   },
//   isPinned: false,
// },

// 'note-todos': {
//   id: "",
//   type: "note-todos",
//   info: {
//     label: "",
//     todos: [
//       {
//         txt: "",
//         done: false,
//         id: ''
//       }],
//   }
// },