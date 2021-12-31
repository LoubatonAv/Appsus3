import { bookService } from '../services/book.service.js';
import { Loader } from '../cmps/Loader.jsx';
import { ReviewAdd } from '../cmps/ReviewAdd.jsx';

export class BookDetails extends React.Component {
  state = {
    book: null,
  };

  componentDidMount() {
    this.loadBook();
  }

  getPageCount = () => {
    const { book } = this.state;
    let pageCount = '';
    if (book.pageCount > 500) {
      pageCount = 'Long Reading';
    } else if (book.pageCount < 100) {
      pageCount = 'Light Reading';
    } else {
      pageCount = 'Decent Reading';
    }
    return pageCount;
  };

  loadBook = () => {
    const { bookId } = this.props.match.params;
    bookService.getBookById(bookId).then((book) =>
      this.setState({ book }, () => {
        if (!book) this.props.history.push('/');
        this.setState({ book });
      })
    );
  };

  isBookNew = () => {
    const { book } = this.state;
    const year = new Date().getFullYear();
    const isBookNew = year - book.publishedDate;
    return isBookNew;
  };

  onRemoveReview = (reviewId) => {
    const bookId = this.state.book.id;
    bookService.removeReview(bookId, reviewId).then(this.loadBook);
  };

  render() {
    const { book } = this.state;

    if (!book) return <Loader />;

    return (
      <section className='book-details'>
        <p>Book Details</p>
        <h1>{book.title}</h1>
        <h2>Subtitle : {book.subtitle}</h2>
        <h3>Author: {book.authors}</h3>
        <h4>{book.description}</h4>
        <h5>Language: {book.language}</h5>
        <img src={book.thumbnail}></img>

        <h2>
          {this.getPageCount()}, {book.pageCount} pages!
        </h2>

        {this.isBookNew() < 1 ? <h2>New book</h2> : <h2>Old Book</h2>}
        <ReviewAdd book={book} loadBook={this.loadBook} />
        <section>
          <h5>Reviews</h5>
          {book.reviews &&
            book.reviews.map((review) => (
              <div key={review.id} className='review'>
                <button onClick={() => this.onRemoveReview(review.id)}>
                  X
                </button>
                <h2>Name: {review.fullName}</h2>
                <p>Review: {review.txt}</p>
                <p>Date: {review.date}</p>
              </div>
            ))}
          {!book.reviews && <h2>No reviews.</h2>}
        </section>
      </section>
    );
  }
}

//<button onClick={onBack}>Back to books</button>  would be an arrow function if we would need to pass a parameter
