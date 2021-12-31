import { MailBoxes } from './MailBoxes.jsx';

export class MailFilter extends React.Component {
  state = {
    filterBy: {
      txt: '',
      isRead: 'false',
      box: 'inbox',
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
    return (
      <div>
        <section>
          <select name='box' onChange={this.handleChange}>
            <option value=''>All folders</option>
            <option value='inbox'>Inbox</option>
            <option value='sent'>Sent</option>
          </select>
        </section>

        <section>
          <select name='isRead' onChange={this.handleChange}>
            <option value=''>All</option>
            <option value='true'>Read</option>
            <option value='false'>UnRead</option>
          </select>
        </section>
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
