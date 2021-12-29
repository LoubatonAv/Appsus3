import { utilService } from './util.service.js'
import { storageService } from './storage.service.js'

export const carService = {
    query,
    queryWithDelay,
    removeCar,
    saveCar,
    getCarById,
    getNextCarId
}

const KEY = 'carDB';
var gVendors = ['audi', 'fiat', 'suzuki', 'honda', 'mazda']

_createCars();

function query(filterBy = null) {
    const cars = _loadCarsFromStorage()
    if (!filterBy) return Promise.resolve(cars)
    const filteredCars = _getFilteredCars(cars, filterBy)
    return Promise.resolve(filteredCars)

}

function getNextCarId(carId) {
    const cars = _loadCarsFromStorage()
    const carIdx = cars.findIndex(car => car.id === carId)
    let nextCarIdx = carIdx + 1
    if (nextCarIdx === cars.length) nextCarIdx = 0
    return cars[nextCarIdx].id
}

function queryWithDelay(filterBy = null) {
    const cars = _loadCarsFromStorage()
    if (!filterBy) {
        return new Promise((resolve) => {
            setTimeout(resolve, 1000, cars)
        })
    } else {
        const filteredCars = _getFilteredCars(cars, filterBy)
        return new Promise((resolve) => {
            setTimeout(resolve, 1000, filteredCars)
        })
    }
}

function _getFilteredCars(cars, filterBy) {
    let { vendor, minSpeed, maxSpeed } = filterBy
    minSpeed = minSpeed ? minSpeed : 0
    maxSpeed = maxSpeed ? maxSpeed : Infinity
    return cars.filter(car => {
        return car.vendor.includes(vendor) && car.speed >= minSpeed && car.speed <= maxSpeed
    })
}

function saveCar(carToSave) {
    return carToSave.id ? _updateCar(carToSave) : _addCar(carToSave)
}

function _addCar(carToSave) {
    let cars = _loadCarsFromStorage()
    var car = _createCar(carToSave)
    cars = [car, ...cars]
    _saveCarsToStorage(cars);
    return Promise.resolve()
}

function _updateCar(carToSave) {
    const cars = _loadCarsFromStorage()
    var carIdx = cars.findIndex(function (car) {
        return car.id === carToSave.id;
    })
    cars[carIdx] = carToSave
    _saveCarsToStorage(cars);
    return Promise.resolve()
}

function removeCar(carId) {
    let cars = _loadCarsFromStorage()
    cars = cars.filter(car => car.id !== carId)
    _saveCarsToStorage(cars);
    return Promise.resolve()
}


function getCarById(carId) {
    const cars = _loadCarsFromStorage()
    var car = cars.find(function (car) {
        return carId === car.id
    })
    return Promise.resolve(car)
}


function _createCar(carToSave) {
    if (!carToSave.speed) carToSave.speed = utilService.getRandomIntInclusive(1, 200)
    return {
        id: utilService.makeId(),
        ...carToSave,
        desc: utilService.makeLorem(),
        ctg: Math.random() <= 0.6 ? 'bestSelling' : ''
    }
}

function _createCars() {
    var cars = _loadCarsFromStorage()
    if (!cars || !cars.length) {
        cars = []
        gVendors.forEach(vendor => {
            const carToSave = { vendor }
            cars.push(_createCar(carToSave))
        })
    }
    _saveCarsToStorage(cars);
}

function _saveCarsToStorage(cars) {
    storageService.saveToStorage(KEY, cars)
}

function _loadCarsFromStorage() {
    return storageService.loadFromStorage(KEY)
}
