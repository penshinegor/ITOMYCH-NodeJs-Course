const findInfoAboutUserUsingPromises = require("./findInfoAboutUserUsingPromises");
const addItemToBasketUsingPromises = require("./addItemToBasketUsingPromises");

module.exports = async function () {
    let customer = await findInfoAboutUserUsingPromises();
    console.log(customer);
    let basket = await addItemToBasketUsingPromises(customer);
    console.log('Basket:', basket, `${basket.reduce((sum, item) => sum += item.price, 0)}$`);
    customer.basket = [];
    console.log('Your payment was successful. Good day...');
}