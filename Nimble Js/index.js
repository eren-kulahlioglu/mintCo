const colors = require('colors')

const Hirer = require('./hirer')
const Lessor = require('./lessor')

const eren = new Hirer('Eren', 'Yenimahalle')
const taygun = new Lessor('Taygun')

const request1 = eren.rentRequest(taygun, 'Yenimahalle', 'Camera')
const request2 = eren.rentRequest(taygun, 'Yenimahalle', 'Drone')
const request3 = eren.rentRequest(taygun, 'Yenimahalle', 'Wireless Lav Mic')
const request4 = eren.rentRequest(taygun, 'Yenimahalle', 'Bass Guitar')

function printRequest(request) {
    console.log(`${request.hirer.name.bgWhite.red} wants to hire ${request.lessor.name.bgRed.white}'s ${request.item} from ${eren.bookings[0].origin.blue}`);
}

function printRequestHistory(hirer) {
    hirer.bookings.forEach(printRequest)
}

printRequestHistory(eren);








