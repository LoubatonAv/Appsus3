import { NoteService } from '../services/note-service.js'
import { NoteList } from '../cmps/note-list.jsx'
import { AddNote } from '../cmps/add-note.jsx'
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
            // console.log(notes)
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
                
                {this.state.isShowNoteModal && <AddNote toggleNoteModal={this.toggleNoteModal} loadNotes={this.loadNotes}/>}

                <NoteList notes={notes} onRemoveNote={this.onRemoveNote} onRemoveTodo={this.onRemoveTodo} onToggleTodoDone={this.onToggleTodoDone} toggleNoteModal={this.toggleNoteModal} />
                
            </section>
        )
    }
}