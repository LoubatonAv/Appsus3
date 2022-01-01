const { Link } = ReactRouterDOM;
import { mailService } from '../services/mail-service.js';

export function EmailPreview({ email, onRemoveMail }) {
  const getDate = (date) => {
    const newDate = new Date(date).toLocaleString('he-us', {
      timeZone: 'GMT',
    });
    return newDate;
  };

  return (
    <article className='email-preview-item'>
      <h1>Subject : {email.subject} </h1>
      <p>From : {email.from}</p>
      <p>Recevied at : {getDate(email.sentAt)}</p>
      <p>{email.body}</p>
      <Link
        to={`/email/${email.id}`}
        onClick={() => mailService.markedAsRead(email)}>
        Read
      </Link>
      {email.isMarked ? <h1>Read</h1> : <h1>Not Read</h1>}
      <button onClick={() => onRemoveMail(email)}>Remove</button>
    </article>
  );
}

// <button onClick={() => onRemoveMail(email.id)}>Remove</button>
