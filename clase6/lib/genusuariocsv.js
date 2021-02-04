const faker = require('faker');
const uuid = require('uuid');

function crearObjetoFake() {
    return [
        uuid.v4(),
        faker.name.firstName(),
        faker.name.lastName(),
        faker.address.city(),
        faker.address.streetName(),
        faker.address.country(),
        faker.finance.accountName(),
        faker.finance.account(),
        faker.finance.amount()
    ].join(';')
}

module.exports = crearObjetoFake;