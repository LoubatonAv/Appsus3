import { bookService } from '../services/book.service.js'
import { BookList } from '../cmps/BookList.jsx'
// import { CarFilter } from '../cmps/CarFilter.jsx'
import { BookDetails } from './NoteDetails.jsx'
import { AddNote } from './AddNote.jsx'

const { Link } = ReactRouterDOM

export class NoteApp extends React.Component {

    state = {
        Notes: [],
        filterBy: null,
    }
    componentDidMount() {
        this.loadNotes()
    }


    loadNotes = () => {
        const { filterBy } = this.state
        bookService.query(filterBy).then(books => {
            this.setState({ books })
        })
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadNotes())
    }

    onRemoveNote = (bookId) => {
        console.log("onRemoveNote")
        //     bookService.removeBook(bookId).then(() => {
        //         const newBooks = this.state.books.filter(book => book.id !== bookId)
        //         this.setState({ books: newBooks }, this.onBack)
        //     })
    }

    render() {
        const { books, selectedNote } = this.state;
        if (!books) return <Loader />
        return (
            <section className="book-app">
                <div className=" add-book">
                <Link className="btn primary-btn clean-link add-book" to="/book/add">Add book</Link>
                </div>
                {/* <BookFilter onSetFilter={this.onSetFilter} /> */}
                <NoteList books={books}/>
            </section>
        )
    }
}


export function NoteIndex() {
  return (
      <section className="app" >
        <main>
          <h1>indexNote</h1>
        </main>
      </section>
  )};
