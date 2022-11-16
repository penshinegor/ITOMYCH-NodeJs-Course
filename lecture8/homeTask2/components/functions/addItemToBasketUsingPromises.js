const prompt = require('prompt-sync')({sigint: true});
const LIST_OF_ITEMS = require('../constants/listOfItem');

module.exports = async function (customer) {
    while (customer.basket.length < 3) {
        let itemName = prompt('Input items name, which is wanted to buy: ');
        for (let item of LIST_OF_ITEMS) {
            if (itemName === item.name) {
                customer.basket.push(item);
                console.log('Item was added to basket');
                break;
            }
        }
    }
    return customer.basket;
}