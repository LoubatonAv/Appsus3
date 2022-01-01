import { mailService } from '../services/mail-service.js';
import { MailList } from '../cmps/MailList.jsx';
import { Loader } from '../cmps/Loader.jsx';
import { eventBusService } from '../services/event-bus.service.js';
import { SendMail } from '../cmps/SendMail.jsx';
import { MailFilter } from '../cmps/MailFilter.jsx';
import { MailBoxes } from '../cmps/MailBoxes.jsx';
import { MailSort } from '../cmps/MailSort.jsx';

export class MailApp extends React.Component {
  state = {
    emails: [],
    isShowMailModal: false,
    criteria: {
      status: '',
      txt: '',
      sort: '',
    },
  };

  componentDidMount() {
    this.loadMails();
  }

  ShowMailModal = () => {
    this.setState((prevState) => ({
      ...prevState,
      isShowMailModal: !this.state.isShowMailModal,
    }));
    this.loadMails();
  };

  loadMails = () => {
    const { filterBy } = this.state;
    mailService.query(filterBy).then((emails) => {
      this.setState({ emails });
    });
  };

  onRemoveMail = (email) => {
    mailService.removeMail(email).then(() => {
      eventBusService.emit('user-msg', {
        txt: 'mail is deleted !',
        type: 'danger',
      });
    });
    this.loadMails();
  };

  onSetBox = (newStatus) => {
    this.setState((prevState) => ({
      criteria: { ...prevState.criteria, status: newStatus },
    }));
    this.loadMails();
  };

  onSetFilter = (filterBy) => {
    this.setState({ filterBy }, this.loadMails);
  };

  render() {
    const { emails } = this.state;
    if (!emails) return <Loader />;
    let count = 0;
    emails.map((email) => {
      if (!email.isMarked) {
        count++;
      }
    });
    const { isShowMailModal } = this.state;

    return (
      <div>
        <h1>Unread count : {count}</h1>
        <button className='compose-btn' onClick={this.ShowMailModal}>
          Send mail
        </button>

        <section className='mail-app'>
          <MailFilter onSetFilter={this.onSetFilter} onSetBox={this.onSetBox} />
          <MailList
            emails={emails}
            onRemoveMail={this.onRemoveMail}
            onAddMail={this.onAddMail}
          />
          {isShowMailModal && <SendMail ShowMailModal={this.ShowMailModal} />}
        </section>
      </div>
    );
  }
}
