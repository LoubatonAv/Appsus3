import { NoteService } from '../services/Note.service.js'
import { NoteList } from '../cmps/note-list.jsx'
import { NoteDetails } from './note-details.jsx'
import { AddNote } from '../cmps/add-note.jsx'
import { Loader } from '../../../cmps/Loader.jsx'
import { eventBusService } from '../../../services/event-bus.service.js'


// const { Link } = ReactRouterDOM

export class NoteApp extends React.Component {

    state = {
        Notes: [],
        filterBy: null,
        isShowNoteModal: false,
    }

    componentDidMount() {
        this.loadNotes()
    }


    loadNotes = () => {
        // const { filterBy } = this.state
        NoteService.query(this.state.filterBy).then(notes => {
            this.setState({ notes })
        })
    }


    onRemoveNote = (id) => {
        NoteService.removeNote(id).then(() => {
            // console.log('id:', id);
            eventBusService.emit('user-msg', {
                txt: 'note is deleted !',
                type: 'danger',
            });
        });
        this.loadNotes();
    };

    onAddNote = () => {
        
        // call modal with buttons for each options, according to type change input (4 options) - defines tyoe, id is generated, input is going to relevant service function
    }
    // onEditNote = (id) => {
    //     console.log('id:', id);
    // }

    onRemoveTodo = (todoKey, noteID) => {
        NoteService.removeTodo(noteID, todoKey).then(() => {
            eventBusService.emit('user-msg', {
                txt: 'todo is deleted !',
                type: 'danger',
            });
        });
        this.loadNotes();
    }

    onToggleTodoDone = (todoKey, noteID) => {
        // debugger
        // console.log('todoKey : ', todoKey);
        // console.log('noteID:', noteID);
        NoteService.ToggleTodoDone(noteID, todoKey).then(() => {
            eventBusService.emit('user-msg', {
                txt: 'todo is deleted !',
                type: 'danger',
            });
        });
        this.loadNotes();
    }


    toggleNoteModal = () => {
        // console.log('excepturi');
        this.setState((prevState) => ({...prevState, isShowNoteModal: !this.state.isShowNoteModal,
        }));
    };


    render() {
        const { notes, selectedNote } = this.state;
        // console.log(notes);
        // if (!notes) return <Loader />
        return (
            <section className="note-app ">
                
                {this.state.isShowNoteModal && <AddNote toggleNoteModal={this.toggleNoteModal}/>}

                <NoteList notes={notes} onRemoveNote={this.onRemoveNote} onRemoveTodo={this.onRemoveTodo} onToggleTodoDone={this.onToggleTodoDone} toggleNoteModal={this.toggleNoteModal} />
                
            </section>
        )
    }
}

{/* <div className=" add-note">
                    <Link className="btn primary-btn clean-link add-note" to="/note/add">Add note</Link>
                </div> */}


// export function NoteIndex() {
//   return (
//       <section className="app" >
//         <main>
//           <h1>indexNote</h1>
//         </main>
//       </section>
//   )};


  // onSetFilter = (filterBy) => {
    //     this.setState({ filterBy }, this.loadNotes())
    // }

    // onRemoveNote = (noteId) => {
    //     console.log("onRemoveNote")
        //     bookService.removeBook(bookId).then(() => {
        //         const newBooks = this.state.books.filter(book => book.id !== bookId)
        //         this.setState({ books: newBooks }, this.onBack)
        //     })
    // }