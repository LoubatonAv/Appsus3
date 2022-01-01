import { EmailPreview } from '../cmps/MailPreview.jsx';

export function MailList({ emails, onRemoveMail, onAddMail }) {
  if (!emails) return <h1>No mails to show!</h1>;

  return (
    <section className='mail-list'>
      {emails.map((email) => (
        <EmailPreview
          key={email.id}
          email={email}
          onRemoveMail={onRemoveMail}
        />
      ))}
    </section>
  );
}
