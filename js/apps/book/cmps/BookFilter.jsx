export class BookFilter extends React.Component {
  state = {
    filterBy: {
      title: '',
      minPrice: '',
      maxPrice: '',
    },
  };

  handleChange = ({ target }) => {
    const field = target.name;
    const value = target.type === 'number' ? +target.value : target.value;
    this.setState(
      (prevState) => ({ filterBy: { ...prevState.filterBy, [field]: value } }),
      () => {
        this.props.onSetFilter(this.state.filterBy);
      }
    );
  };

  render() {
    const {
      filterBy: { title, minPrice, maxPrice },
    } = this.state;

    return (
      <form className='book-filter'>
        <label htmlFor='by-title'>By title</label>
        <input
          type='text'
          id='by-title'
          value={title}
          name='title'
          onChange={this.handleChange}></input>
        <label htmlFor='by-min-price'>Min Price</label>
        <input
          type='number'
          min='0'
          id='by-min-price'
          value={minPrice}
          name='minPrice'
          onChange={this.handleChange}></input>
        <label htmlFor='by-max-price'>Max Price</label>
        <input
          type='number'
          min='0'
          id='by-max-price'
          value={maxPrice}
          name='maxPrice'
          onChange={this.handleChange}></input>
        <button>Filter</button>
      </form>
    );
  }
}
//in order to connect the state to the input we need to use value
//two-way data-binding
//
