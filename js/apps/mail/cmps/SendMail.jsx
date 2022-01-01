import { mailService } from '../services/mail-service.js';
import { eventBusService } from '../services/event-bus.service.js';

export class SendMail extends React.Component {
  state = {
    email: {
      to: '',
      subject: '',
      body: '',
    },
  };
  inputRef = React.createRef();

  handleChange = ({ target }) => {
    const field = target.name;
    const value = target.value;
    this.setState((prevState) => ({
      email: { ...prevState.email, [field]: value },
    }));
  };

  onSaveEmail = (ev) => {
    ev.preventDefault();
    const { email } = this.state;
    mailService.saveMail(email);
    this.props.ShowMailModal();
  };

  render() {
    const { to, subject, body } = this.state.email;
    return (
      <div>
        <section className='mail-add'>
          <div className='mail-modal'>
            <form className='send-mail-form' onSubmit={this.onSaveEmail}>
              <button
                className='close-mail-form'
                onClick={() => this.props.ShowMailModal()}>
                ×
              </button>
              To:{' '}
              <input
                ref={this.inputRef}
                name='to'
                type='text'
                id='to-user'
                value={to}
                onChange={this.handleChange}
              />
              Subject:{' '}
              <input
                name='subject'
                type='text'
                id='subject'
                value={subject}
                onChange={this.handleChange}
              />
              Body :{' '}
              <textarea name='body' value={body} onChange={this.handleChange} />
              <button>Send mail</button>
            </form>
          </div>
        </section>
      </div>
    );
  }
}

// <div className='review-modal'>
// <form onSubmit={this.onSaveReview} className='review-form'>
//   <label htmlFor='by-fullname'>Full name:</label>
//   <input
//     placeholder='Enter full name'
//     name='fullName'
//     type='text'
//     id='by-fullname'
//     value={fullName}
//     onChange={this.handleChange}
//     autoComplete='off'
//   />
//   <button>Add review</button>
// </form>
// </div>
