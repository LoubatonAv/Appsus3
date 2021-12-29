import { mailService } from '../services/mail-service.js';
import { MailList } from '../cmps/MailList.jsx';

export class MailApp extends React.Component {
  state = {
    emails: null,
  };

  componentDidMount() {
    this.loadMails();
  }

  loadMails = () => {
    mailService.query().then((emails) => {
      this.setState({ emails });
    });
  };

  render() {
    const { emails } = this.state;
    return (
      <section className='mail-app'>
        <MailList emails={emails} />
      </section>
    );
  }
}
