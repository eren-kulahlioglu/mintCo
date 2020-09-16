function printRequest(request) {
    console.log(`${request.hirer.name} has ${eren.bookings.length} booking(s).`)
    console.log(`${request.hirer.name} wants to hire your ${request.belonging} from ${eren.bookings[0].origin}`);

}

class Lessor {
    constructor(name) {
        this.name = name
    }
}

class Hirer {
    constructor(name, location) {
        this.name = name
        this.location = location
        this.bookings = []

    }

    rentRequest(lessor, origin, belonging) {
        const booking = new rentRequests(lessor, this, origin, belonging)
        this.bookings.push(booking)

        return booking;
    }

    printRequestHistory() {
        printRequest(this.bookings[0]);

    }

}

class rentRequests {
    constructor(lessor, hirer, origin, belonging) {
        this.lessor = lessor
        this.hirer = hirer
        this.origin = origin
        this.belonging = belonging
    }
}

class Items {
    constructor(id, name, type, explanation, itemColor) {
        this.id = id
        this.name = name
        this.type = type
        this.explanation = explanation
        this.itemColor = itemColor
    }
}

const eren = new Hirer('Eren', 'Yenimahalle')
const taygun = new Lessor('Taygun')

const request1 = eren.rentRequest(taygun, 'Yenimahalle', 'Camera')
const request2 = eren.rentRequest(taygun, 'Yenimahalle', 'Drone')
const request3 = eren.rentRequest(taygun, 'Yenimahalle', 'Wireless Lav Mic')


eren.printRequestHistory();

//printRequest(request1);
//printRequest(request2);
//printRequest(request3);   







