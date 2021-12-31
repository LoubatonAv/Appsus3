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

const STORAGE_KEY = 'emailsDB';

const gEmails = [
  {
    id: utilService.makeId(),
    subject: 'Miss you!',
    body: 'Would love to catch up sometimes',
    isRead: 'false',
    sentAt: 1551133930594,
    to: 'momo@momo.com',
    box: 'inbox',
    isMarked: false,
  },
  {
    id: utilService.makeId(),
    subject: 'Hate you!',
    body: 'Filtering this is a nightmare',
    isRead: 'true',
    sentAt: 1551133930594,
    to: 'momo@momo.com',
    box: 'inbox',
    isMarked: true,
  },
  {
    id: utilService.makeId(),
    subject: 'Buck you!',
    body: 'But overall this is fun',
    isRead: 'true',
    sentAt: 1551133930594,
    to: 'momo@momo.com',
    box: 'inbox',
    isMarked: true,
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

function removeMail(emailId) {
  let emails = _loadEmailsFromStorage();
  emails = emails.filter((email) => email.id !== emailId);
  _saveEmailsToStorage(emails);
  return Promise.resolve();
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
  };
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
  const { isRead, box } = filterBy;
  console.log('box:', box);

  if (isRead === '') return emails;
  return emails.filter((email) => {
    return email.isRead === isRead && email.box === box;
  });
}

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
