import { mailService } from '../services/mail-service.js';
import { Loader } from '../cmps/Loader.jsx';

export class MailDetails extends React.Component {
  state = {
    email: null,
  };

  componentDidMount() {
    this.loadEmail();
  }

  loadEmail = () => {
    const { emailId } = this.props.match.params;
    mailService.getEmailById(emailId).then((email) =>
      this.setState({ email }, () => {
        if (!email) this.props.history.push('/');
        this.setState({ email });
      })
    );
  };

  render() {
    const { email } = this.state;
    if (!email) return <Loader />;
    return (
      <section className='email-details'>
        <h1>{email.subject}</h1>
        <p>{email.body}</p>
        <p>{email.createdAt}</p>
      </section>
    );
  }
}

//<button onClick={onBack}>Back to books</button>  would be an arrow function if we would need to pass a parameter
