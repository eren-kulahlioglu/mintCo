const rentRequests = require('./rentRequests')
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
}

module.exports = Hirer 