import { bookService } from '../services/book.service.js';
import { BookList } from '../cmps/BookList.jsx';
import { BookFilter } from '../cmps/BookFilter.jsx';
import { BookAdd } from '../pages/BookAdd.jsx';

export class BookApp extends React.Component {
  state = {
    books: [],
    filterBy: null,
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    const { filterBy } = this.state;
    bookService.query(filterBy).then((books) => {
      this.setState({ books });
    });
  };

  onSetFilter = (filterBy) => {
    this.setState({ filterBy }, this.loadBooks); // we need this state as well so we can condionally render properly
  };

  render() {
    const { books } = this.state;
    return (
      <div>
        <BookAdd />
        <BookFilter onSetFilter={this.onSetFilter} />
        <BookList books={books} />
      </div>
    );
  }
}
