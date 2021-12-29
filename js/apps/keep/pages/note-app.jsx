import { NoteService } from '../services/Note.service.js'
import { NoteList } from '../cmps/note-list.jsx'
import { NoteDetails } from './note-details.jsx'
import { Loader } from '../../../cmps/Loader.jsx'


// const { Link } = ReactRouterDOM

export class NoteApp extends React.Component {

    state = {
        Notes: [],
        filterBy: null,
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



    render() {
        const { notes, selectedNote } = this.state;
        // console.log(notes);
        // if (!notes) return <Loader />
        return (
            <section className="note-app">
                <NoteList notes={notes} />
                {/* <div className=" add-note"> */}
                {/* <Link className="btn primary-btn clean-link add-note" to="/note/add">Add note</Link> */}
                {/* </div> */}
            </section>
        )
    }
}


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