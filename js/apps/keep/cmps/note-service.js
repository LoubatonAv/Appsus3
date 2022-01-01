import { utilService } from '../../../services/util.service.js';
import { storageService } from '../../../services/storage.service.js';

export const NoteService = {
  query,
  removeNote,
  removeTodo,
  ToggleTodoDone,
  saveNote: saveNote,
};

const KEY = 'noteDB';

let notesDefault = [
  {
    id: 'n101',

    isPinned: true,
    info: {
      txt: 'Fullstack Me Baby!',
      type: 'note-txt',
      title: 'LOL',
    },
  },

  {
    id: "n102",
    info: {
      type: "note-img",
      url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1124&q=100",
      title: "Bobi and Me"
    },
    isPinned: false,
  },

  {
    id: 'n103',
    info: {
      type: 'note-todos',
      title: 'Get my stuff together',
      todos: [
        { txt: "Driving liscence", done: false, id: 101 },
        { txt: "Coding power", done: true, id: 102 }
      ]
    }
  },

  {
    id: "n106",
    info: {
      type: "note-vid",
      url: "https://www.youtube.com/embed/tgbNymZ7vqY",
      title: "Loki"
    },
    isPinned: false,
  },
]

_createNotes();

function _createNotes() {
  var notes = _loadNotesFromStorage() || notesDefault;
  _saveNotesToStorage(notes);
}

function query(filterBy = null) {
  const notes = _loadNotesFromStorage();
  if (!filterBy) return Promise.resolve(notes);
  // const filteredCars = _getFilteredCars(notes, filterBy)
  // return Promise.resolve(filteredCars)
}

function saveNote(info) {
  // console.log('execute saveNote: ', info);
  let notes = _loadNotesFromStorage();
  let note = null;
  switch (info.type) {
    case 'note-txt':
      note = _createTextNote(info);
      break;
    case 'note-img':
      note = _createImageNote(info);
      break;
    case 'note-todos':
      note = _createTodosNote(info);
      break;
    case 'note-vid':
      console.log('made it to case')
      note = _createImageNote(info)
      break;
  }
  notes = [note, ...notes];
  _saveNotesToStorage(notes);
  return Promise.resolve(note);
}

function _createTodosNote(info) {
  let currTodos = info.todos.map((todoTxt) => {
    let todo = {
      done: false,
      id: utilService.makeId(),
      txt: todoTxt,
    };
    return todo;
  });
  console.log('currTodos: ', currTodos);
  return {
    id: utilService.makeId(),
    info: {
      title: info.title,
      type: info.type,
      todos: [...currTodos],
    },
    isPinned: false,
  };
}
function _createTextNote(info) {
  return {
    id: utilService.makeId(),
    info,
    isPinned: false,
  };
}
function _createImageNote(info) {
  return {
    id: utilService.makeId(),
    info: {
      title: info.title,
      url: info.url,
      type: info.type,
    },
    isPinned: false,
  };
}

function removeNote(noteId) {
  let notes = _loadNotesFromStorage();
  notes = notes.filter((note) => note.id !== noteId);
  _saveNotesToStorage(notes);
  return Promise.resolve();
}

function removeTodo(noteId, todoId) {

  let notes = _loadNotesFromStorage();
  let note = notes.find((note) => note.id === noteId);

  const noteIdx = notes.findIndex((note) => note.id === noteId);
  let newTodos = note.info.todos.filter((todo) => todo.id !== todoId);

  note.info.todos = newTodos;
  notes[noteIdx] = note;
  _saveNotesToStorage(notes);
  return Promise.resolve();
}

function ToggleTodoDone(noteId, todoId) {

  let notes = _loadNotesFromStorage();
  let note = notes.find((note) => note.id === noteId);

  const noteIdx = notes.findIndex((note) => note.id === noteId);
  const todoIdx = note.info.todos.findIndex((todo) => todo.id === todoId);
  let toggeldTodo = note.info.todos.find((todo) => todo.id === todoId);
  toggeldTodo.done = !toggeldTodo.done;

  note.info.todos[todoIdx] = toggeldTodo;
  notes[noteIdx] = note;
  _saveNotesToStorage(notes);
  return Promise.resolve();
}

function getNoteById(noteId) {
  const notes = _loadNotesFromStorage();
  var note = notes.find(function (note) {
    return noteId === note.id;
  });
  return Promise.resolve(note);
}

function _saveNotesToStorage(notes) {
  storageService.saveToStorage(KEY, notes);
}

function _loadNotesFromStorage() {
  return storageService.loadFromStorage(KEY);
}
