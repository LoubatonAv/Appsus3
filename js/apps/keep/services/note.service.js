import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/storage.service.js'

export const NoteService = {
  query,
  // getBookById,
  // checkReadLength,
  // getGoogleResults,
  // addBook,
  // addCar,
  // removeCar,
  // updateCar
}


const KEY = 'noteDB';

let notesDefault = [
  {
    id: "n101",
    type: "note-txt",
    isPinned: true,
    info: {
      txt: "Fullstack Me Baby!"
    }
  },

  {
    id: "n102",
    type: "note-img",
    info: {
      url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1124&q=100",
      title: "Bobi and Me"
    },
    style: {
      backgroundColor: "#00d"
    }
  },

  {
    id: "n103",
    type: "note-todos",
    info: {
      label: "Get my stuff together",
      todos: [
        { txt: "Driving liscence", doneAt: null },
        { txt: "Coding power", doneAt: 187111111 }
      ]
    }
  }
]

_createNotes();

function _createNotes() {
  var notes = _loadNotesFromStorage() || notesDefault
  _saveNotesToStorage(notes);
}

function query(filterBy = null) {
  const notes = _loadNotesFromStorage()
  if (!filterBy) return Promise.resolve(notes)
  // const filteredCars = _getFilteredCars(notes, filterBy)
  // return Promise.resolve(filteredCars)
}

function getNoteById(noteId) {
  const notes = _loadNotesFromStorage()
  var note = notes.find(function (note) {
    return noteId === note.id
  })
  return Promise.resolve(note)
}

function _saveNotesToStorage(notes) {
  storageService.saveToStorage(KEY, notes)
}

function _loadNotesFromStorage() {
  return storageService.loadFromStorage(KEY)
}

// function checkReadLength(book) {
//     let readingLength = '';
//     if (book.pageCount > 500) readingLength = 'Long Reading';
//     else if (book.pageCount < 100) readingLength = 'Light Reading';
//     else readingLength = 'Decent Reading';
//     return readingLength;
// }

// function getGoogleResults(search) {
//     const url = `https://www.googleapis.com/books/v1/volumes?printType=books&q=${search}`
//     return axios.get(url)
//         .then(res => res.data.items)
// }

// function addBook(book) {
//     const compressedBook = {
//         id: utilService.makeId(),
//         title: book.volumeInfo.title,
//         subtitle: book.volumeInfo.subtitle,
//         authors: book.volumeInfo.authors || ['unknown'],
//         description: book.volumeInfo.description || 'No description',
//         thumbnail: (book.volumeInfo.imageLinks) ? book.volumeInfo.imageLinks.thumbnail : './assets/img/noImg.png',
//         reviews: [],
//         listPrice: {
//             amount: utilService.getRandomIntInclusive(10, 400),
//             currencyCode: 'ILS',
//             isOnSale: (Math.random() < 0.4),
//         },
//         pageCount: book.volumeInfo.pageCount,
//         categories: book.volumeInfo.categories || ['general'],
//         language: book.volumeInfo.language,
//         publishedDate: +book.volumeInfo.publishedDate.split('-')[0]
//     }
//     const books = _loadBooksFromStorage();
//     books.push(compressedBook);
//     _saveBooksToStorage(books);
//     return Promise.resolve()
// }


// function _createCar(vendor, speed) {
//     if (!speed) speed = utilService.getRandomIntInclusive(1, 200)
//     return {
//         id: utilService.makeId(),
//         vendor,
//         speed,
//         desc: utilService.makeLorem()
//     }
// }

// function _getFilteredCars(cars, filterBy) {
//     let { vendor, minSpeed, maxSpeed } = filterBy
//     minSpeed = minSpeed ? minSpeed : 0
//     maxSpeed = maxSpeed ? maxSpeed : Infinity
//     return cars.filter(car => {
//         return car.vendor.includes(vendor) && car.speed >= minSpeed && car.speed <= maxSpeed
//     })
// }

// function removeCar(carId) {
//     let cars = _loadCarsFromStorage()
//     cars = cars.filter(car => car.id !== carId)
//     _saveCarsToStorage(cars);
//     return Promise.resolve()
// }

// function addCar(vendor, speed) {
//     const cars = _loadCarsFromStorage()
//     var car = _createCar(vendor, speed)
//     cars = [car, ...cars]
//     _saveCarsToStorage(cars);
//     return Promise.resolve(car)
// }



// function updateCar(carId, newSpeed) {
//     const cars = _loadCarsFromStorage()
//     var car = cars.find(function (car) {
//         return car.id === carId;
//     })
//     car.speed = newSpeed;
//     _saveCarsToStorage(cars);
//     return Promise.resolve()
// }