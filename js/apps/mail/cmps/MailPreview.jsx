const { Link } = ReactRouterDOM;
import { mailService } from '../services/mail-service.js';

export function EmailPreview({ email }) {
  const getDate = (date) => {
    const newDate = new Date(date).toLocaleString('he-us', {
      timeZone: 'GMT',
    });
    return newDate;
  };

  // const isMarkedRead = (email) => {
  //   console.log('email:', email);
  //   return email.isRead;
  // };
  return (
    <article className='email-preview'>
      <p>{email.subject}</p>
      <p>{email.body}</p>
      <p>{getDate(email.sentAt)}</p>
      <Link
        to={`/email/${email.id}`}
        onClick={() => mailService.markedAsRead(email)}>
        Read
      </Link>
      {email.isRead ? <h1>Read</h1> : <h1>Not read</h1>}
    </article>
  );
}
