const { Link } = ReactRouterDOM;

export function EmailPreview({ email }) {
  const getDate = (date) => {
    const newDate = new Date(date).toLocaleString('he-us', {
      timeZone: 'GMT',
    });
    return newDate;
  };

  return (
    <article className='email-preview'>
      <p>{email.subject}</p>
      <p>{email.body}</p>
      <p>{getDate(email.sentAt)}</p>
      <Link to={`/email/${email.id}`}>Read</Link>
    </article>
  );
}
