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
    <div>
      <article className='email-preview'>
        <p>{email.subject}</p>
        <p>{email.body}</p>
        <p>{getDate(email.sentAt)}</p>
        <Link
          to={`/email/${email.id}`}
          onClick={() => mailService.markedAsRead(email)}>
          Read
        </Link>
        {email.isMarked ? <h1>Read</h1> : <h1>Not Read</h1>}
        <button onClick={() => onRemoveMail(email.id)}>Remove</button>
      </article>
    </div>
  );
}
