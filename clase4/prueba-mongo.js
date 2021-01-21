const mongoInterface = require('./lib/MongoInterface')

let cliente = {
	"id": "f36886c6-acbf-4af8-bd75-bec74e2b78bb",
	"firstName": "Antonio",
	"lastName": "Lowe",
	"city": "North Cindyton",
	"streetName": "Cheyenne Radial",
	"country": "Turkmenistan",
	"accountName": "Home Loan Account",
	"account": "38492861",
	"amount": 231.1,
	"azar": {
		"val1": 73,
		"val2": 44,
		"val3": 84,
		"val4": 7
	}
}

mongoInterface.insert('viajando','prueba1', cliente, (err, data) => { 
    console.log(err)
    console.log(data)
})