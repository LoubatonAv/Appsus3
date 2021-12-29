import { EmailPreview } from '../cmps/MailPreview.jsx';

export function MailList({ emails }) {
  if (!emails) return <h1>No mails to show!</h1>;

  return (
    <section className='email-list'>
      asd
      {emails.map((email) => (
        <EmailPreview key={email.id} email={email} />
      ))}
    </section>
  );
}
