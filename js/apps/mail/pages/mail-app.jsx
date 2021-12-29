import { mailService } from '../services/mail-service.js';
import { MailList } from '../cmps/MailList.jsx';
import { Loader } from '../cmps/Loader.jsx';
import { eventBusService } from '../services/event-bus.service.js';

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

  onRemoveMail = (id) => {
    mailService.removeMail(id).then(() => {
      console.log('id:', id);
      eventBusService.emit('user-msg', {
        txt: 'mail is deleted !',
        type: 'danger',
      });
    });
    this.loadMails();
  };

  render() {
    const { emails } = this.state;
    if (!emails) return <Loader />;

    let count = 0;
    emails.map((email) => {
      if (!email.isRead) {
        count++;
      }
    });

    return (
      <section className='mail-app'>
        <h1>Unreal count : {count}</h1>
        <MailList
          emails={emails}
          onRemoveMail={this.onRemoveMail}
          onAddMail={this.onAddMail}
        />
      </section>
    );
  }
}
