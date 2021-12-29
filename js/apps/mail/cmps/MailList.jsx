import { EmailPreview } from '../cmps/MailPreview.jsx';

export function MailList({ emails, onRemoveMail, onAddMail }) {
  if (!emails) return <h1>No mails to show!</h1>;

  return (
    <div>
      <section className='email-list'>
        <button>Compose</button>
        {emails.map((email) => (
          <EmailPreview
            key={email.id}
            email={email}
            onRemoveMail={onRemoveMail}
          />
        ))}
      </section>
    </div>
  );
}
