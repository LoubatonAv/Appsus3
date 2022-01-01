import { storageService } from './storage.service.js';
import { utilService } from './util.service.js';

export const mailService = {
  query,
  getEmailById,
  markedAsRead,
  saveMail,
  removeMail,
  createMail,
};

const user = {
  username: 'dodo@gmail.com',
  password: 12345,
};
const STORAGE_KEY = 'emailsDB';

const gEmails = [
  {
    id: utilService.makeId(),
    subject: 'INBOX',
    body: 'Would love to catch up sometimes',
    isRead: 'false',
    sentAt: 1551133930594,
    to: 'momo@momo.com',
    box: 'inbox',
    isMarked: false,
    from: 'momo@momo.com',
  },
  {
    id: utilService.makeId(),
    subject: 'INBOX',
    body: 'Would love to catch up sometimes',
    isRead: 'false',
    sentAt: 1551133930594,
    to: 'momo@momo.com',
    box: 'inbox',
    isMarked: false,
    from: 'momo@momo.com',
  },
  {
    id: utilService.makeId(),
    subject: 'INBOX',
    body: 'Would love to catch up sometimes',
    isRead: 'false',
    sentAt: 1551133930594,
    to: 'momo@momo.com',
    box: 'inbox',
    isMarked: false,
    from: 'momo@momo.com',
  },
  {
    id: utilService.makeId(),
    subject: 'INBOX',
    body: 'Would love to catch up sometimes',
    isRead: 'false',
    sentAt: 1551133930594,
    to: 'momo@momo.com',
    box: 'inbox',
    isMarked: false,
    from: 'momo@momo.com',
  },
  {
    id: utilService.makeId(),
    subject: 'SENT!',
    body: 'Filtering this is a nightmare',
    isRead: 'true',
    sentAt: 1551133930594,
    to: 'momo@momo.com',
    box: 'sent',
    isMarked: true,
    from: 'momo@momo.com',
  },
  {
    id: utilService.makeId(),
    subject: 'DELETED',
    body: 'But overall this is fun',
    isRead: 'true',
    sentAt: 1551133930594,
    to: 'momo@momo.com',
    box: 'deleted',
    isMarked: true,
    from: 'momo@momo.com',
  },
];

_createEmails();

function saveMail(emailToSave) {
  let emails = _loadEmailsFromStorage();
  var email = createMail(emailToSave);
  emails = [email, ...emails];
  _saveEmailsToStorage(emails);
  return Promise.resolve();
}

function removeMail(mail) {
  let emails = _loadEmailsFromStorage();
  emails = emails.filter((email) => email.id !== mail.id);
  _saveEmailsToStorage(emails);
  return Promise.resolve();
}

function markedAsRead(emailId) {
  const emails = _loadEmailsFromStorage();
  var email = emails.find((email) => {
    return emailId.id === email.id;
  });
  email.isMarked = true;
  email.isRead = 'true';
  _saveEmailsToStorage(emails);
  return Promise.resolve(email);
}

function createMail(emailToSave) {
  return {
    id: utilService.makeId(),
    to: emailToSave.to,
    subject: emailToSave.subject,
    body: emailToSave.body,
    isRead: 'false',
    sentAt: new Date().getTime(),
    box: 'sent',
    isMarked: false,
    from: user.username,
  };
}

function getEmailById(emailId) {
  const emails = _loadEmailsFromStorage();
  var email = emails.find((email) => {
    return emailId === email.id;
  });
  return Promise.resolve(email);
}

function query(filterBy = null) {
  const emails = _loadEmailsFromStorage();
  if (!filterBy) return Promise.resolve(emails);
  const filteredMails = _getFilteredMails(emails, filterBy);
  return Promise.resolve(filteredMails);
}

function _getFilteredMails(emails, filterBy) {
  const { isRead, box, txt } = filterBy;

  return emails.filter((email) => {
    if (txt) return email.body.toLowerCase().includes(txt.toLowerCase());
    if (!txt && !isRead && !box) return emails;
    if (isRead === '') {
      return email.box === box;
    }

    return email.isRead === isRead && email.box === box;
  });
}

// if (isRead === '') {
//   return email.box === box;
// }
// return email.isRead === isRead && email.box === box;
// });

function _createEmails() {
  let emails = _loadEmailsFromStorage();
  if (!emails || !emails.length) {
    emails = gEmails;
  }
  _saveEmailsToStorage(emails);
}

function _saveEmailsToStorage(emails) {
  storageService.saveToStorage(STORAGE_KEY, emails);
}

function _loadEmailsFromStorage() {
  return storageService.loadFromStorage(STORAGE_KEY);
}
