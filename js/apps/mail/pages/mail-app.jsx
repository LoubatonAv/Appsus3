import { mailService } from '../services/mail-service.js';
import { MailList } from '../cmps/MailList.jsx';
import { Loader } from '../cmps/Loader.jsx';
import { eventBusService } from '../services/event-bus.service.js';
import { SendMail } from '../cmps/SendMail.jsx';
import { MailFilter } from '../cmps/MailFilter.jsx';

export class MailApp extends React.Component {
  state = {
    emails: null,
    isShowMailModal: false,
  };

  componentDidMount() {
    this.loadMails();
  }

  ShowMailModal = () => {
    this.setState((prevState) => ({
      ...prevState,
      isShowMailModal: !this.state.isShowMailModal,
    }));
  };

  loadMails = () => {
    mailService.query().then((emails) => {
      this.setState({ emails });
    });
  };

  onRemoveMail = (id) => {
    mailService.removeMail(id).then(() => {
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
    const { isShowMailModal } = this.state;
    return (
      <div>
        <section className='mail-app'>
          <MailFilter />
          <h1>Unreal count : {count}</h1>
          <button onClick={this.ShowMailModal}>Compose</button>
          <MailList
            emails={emails}
            onRemoveMail={this.onRemoveMail}
            onAddMail={this.onAddMail}
          />
          {isShowMailModal && <SendMail />}
        </section>
      </div>
    );
  }
}
