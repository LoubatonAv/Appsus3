import { mailService } from '../services/mail-service.js';
import { Loader } from '../cmps/Loader.jsx';
const { Link } = ReactRouterDOM;

export class MailDetails extends React.Component {
  state = {
    email: null,
  };

  getDate = (date) => {
    const newDate = new Date(date).toLocaleString('he-us', {
      timeZone: 'GMT',
    });
    return newDate;
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
    console.log('email:', email);

    if (!email) return <Loader />;
    return (
      <section className='email-details'>
        Sent at : {this.getDate(email.sentAt)}
        <p> To : {email.to}</p>
        <p> From : {email.from}</p>
        <h1>{email.subject} </h1>
        <p>{email.body}</p>
        <Link to={`/email/`}>Go back</Link>
      </section>
    );
  }
}

//<button onClick={onBack}>Back to books</button>  would be an arrow function if we would need to pass a parameter
