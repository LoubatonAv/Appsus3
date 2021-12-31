import { bookService } from '../services/book.service.js';
import { Loader } from '../cmps/Loader.jsx';
import { eventBusService } from '../services/event-bus.service.js';

export class BookAdd extends React.Component {
  state = {
    searchValue: '',
    res: [],
  };

  onSearch = (ev) => {
    ev.preventDefault();
    bookService
      .getGoogleResults(this.state.searchValue)
      .then((res) => this.setState({ res: res || [] }));
  };

  onAddBook = (id) => {
    bookService.addBook(id);
    eventBusService.emit('user-msg', { txt: 'Saved !', type: 'success' });
  };

  handleChange = ({ target }) => {
    const field = target.name;
    const value = target.value;

    this.setState((prevState) => ({
      searchValue: prevState.searchValue,
      [field]: value,
    }));
  };

  render() {
    const { searchValue, res } = this.state;

    if (!res) {
      console.log('');
    }

    return (
      <div>
        <form>
          <label htmlFor='searchValue'>Search</label>
          <input
            type='text'
            id='by-searchValue'
            name='searchValue'
            value={searchValue}
            onChange={this.handleChange}></input>
        </form>
        <button onClick={this.onSearch}>Search</button>
        {res &&
          res.map((book) => {
            return (
              <ul className='books-ul' key={book.volumeInfo.title}>
                <li>{book.volumeInfo.title}</li>
                <button
                  onClick={() => {
                    this.onAddBook(book);
                  }}>
                  +
                </button>
              </ul>
            );
          })}
      </div>
    );
  }
}
//in order to connect the state to the input we need to use value
//two-way data-binding
