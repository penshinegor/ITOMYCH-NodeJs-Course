const prompt = require('prompt-sync')({sigint: true});
const LIST_OF_CUSTOMERS = require('../constants/listOfCustomers');

module.exports = async function () {
    while (true) {
        let userName = prompt('Input user name, who is buying item: ');
        for (let customer of LIST_OF_CUSTOMERS) {
            if (userName === customer.name) {
                return customer;
            }
        }
        console.log('Our shop doesn\'t have customer with inputted name ...');
    }
}