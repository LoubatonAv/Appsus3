import { MailBoxes } from './MailBoxes.jsx';

export class MailFilter extends React.Component {
  state = {
    filterBy: {
      txt: '',
      isRead: '',
      box: '',
    },
  };

  handleChange = ({ target }) => {
    const field = target.name;
    const value = target.value;

    this.setState(
      (prevState) => ({ filterBy: { ...prevState.filterBy, [field]: value } }),
      () => {
        this.props.onSetFilter(this.state.filterBy);
      }
    );
  };

  render() {
    const {
      filterBy: { txt },
    } = this.state;
    return (
      <div className='filters'>
        <div>
          <input
            placeholder='Search Here...'
            type='text'
            id='by-txt'
            name='txt'
            value={txt}
            onChange={this.handleChange}
          />
        </div>
        <section className='read-filter'>
          <select name='isRead' onChange={this.handleChange}>
            <option value=''>All</option>
            <option value='true'>Read</option>
            <option value='false'>UnRead</option>
          </select>
        </section>
        <div className='mail-boxes'>
          <button name='box' onClick={this.handleChange} value='inbox'>
            Inbox <i className='fa fa-inbox'></i>
          </button>
          <button name='box' onClick={this.handleChange} value='sent'>
            Sent <i className='fa fa-paper-plane'></i>
          </button>
          <button name='box' onClick={this.handleChange} value='deleted'>
            Deleted <i className='fa fa-trash'></i>
          </button>
        </div>
      </div>
    );
  }
}

// <section className='email-filter'>
// <label htmlFor='by-text'>TEXT</label>
// <input type='text' id='by-text' value={txt} />
// <select name='isRead' onChange={this.handleChange}>
//   <option value=''>Read/Unread</option>
//   <option value={true}>Read</option>
//   <option value={false}>Unread</option>
// </select>
// </section>

// <section>
// <label htmlFor='by-text'>TEXT</label>
// <input
//   type='text'
//   id='by-text'
//   value={txt}
//   name='txt'
//   onChange={this.handleChange}
// />
// </section>
