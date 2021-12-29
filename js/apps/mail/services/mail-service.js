import { storageService } from './storage.service.js';
import { utilService } from './util.service.js';

export const mailService = {
  query,
  getEmailById,
  markedAsRead,
};

const STORAGE_KEY = 'emailsDB';

const gEmails = [
  {
    id: utilService.makeId(),
    subject: 'Miss you!',
    body: 'Would love to catch up sometimes',
    isRead: false,
    sentAt: 1551133930594,
    to: 'momo@momo.com',
  },
  {
    id: utilService.makeId(),
    subject: 'Hate you!',
    body: 'Would love to catch up sometimes',
    isRead: false,
    sentAt: 1551133930594,
    to: 'momo@momo.com',
  },
  {
    id: utilService.makeId(),
    subject: 'Buck you!',
    body: 'Would love to catch up sometimes',
    isRead: false,
    sentAt: 1551133930594,
    to: 'momo@momo.com',
  },
];

_createEmails();

function markedAsRead(emailId) {
  const emails = _loadEmailsFromStorage();

  var email = emails.find((email) => {
    return emailId.id === email.id;
  });
  // const tempEmails = emails.filter((email) => email.id !== emailId.id);
  email.isRead = true;
  // tempEmails.push(email);
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

// function getEmailById(emailId) {
//   const emails = _loadBooksFromStorage();
//   var email = emails.find((email) => {
//     return emailId === email.id;
//   });
//   return Promise.resolve(email);
// }

function query() {
  const emails = _loadEmailsFromStorage();

  return Promise.resolve(emails);
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
