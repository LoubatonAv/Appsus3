import { bookService } from '../services/book.service.js';
import { utilService } from '../services/util.service.js';

export class ReviewAdd extends React.Component {
  state = {
    review: {
      fullName: '',
      date: new Date(),
      txt: '',
    },
  };

  componentDidMount() {}

  handleChange = ({ target }) => {
    const field = target.name;
    const value = target.value;
    this.setState((prevState) => ({
      review: { ...prevState.review, [field]: value },
    }));
  };

  onAddReview = (e) => {
    e.preventDefault();
    const { review } = this.state;
    bookService.addReview(this.props.book.id, review);
    console.log(review.id);
    this.props.loadBook();
  };

  render() {
    const { fullName, date, txt } = this.state.review;
    return (
      <section className='review-add'>
        <h1>Book review</h1>
        <form onSubmit={this.onAddReview} className='book-review'>
          <label htmlFor='fullName'>Full name</label>
          <input
            type='text'
            id='by-fullname'
            name='fullName'
            value={fullName}
            onChange={this.handleChange}></input>
          <label htmlFor='by-date'>Date</label>
          <input
            type='date'
            id='date'
            name='date'
            value={date}
            onChange={this.handleChange}></input>
          <label htmlFor='by-txt'>Text</label>
          <textarea
            type='text'
            id='txt'
            name='txt'
            value={txt}
            onChange={this.handleChange}></textarea>
          <button>Submit</button>
        </form>
      </section>
    );
  }
}

//in order to connect the state to the input we need to use value
//two-way data-binding
//

// <input
// type='number'
// min='0'
// max='5'
// id='rating'
// name='rating'
// value={}
// onChange={this.handleChange}></input>
