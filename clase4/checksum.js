let sha1 = require('sha1')

let cliente = {
	// "id": "f36886c6-acbf-4af8-bd75-bec74e2b78bb",
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

let pepapig = {
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

let checksum = sha1(JSON.stringify(cliente))
console.log('cli__' + checksum)

let checksum2 = sha1(JSON.stringify(pepapig))
let otroId = 'cli__' + checksum2

if (checksum===checksum2) {
    console.log('el objeto ya existe en la base')
}
