
module.exports = function (findInfoAboutUser, addItemToBasket, outputBasketAndPrice, buyItems) {
    let customer = findInfoAboutUser();
    console.log(customer);
    addItemToBasket(customer);
    outputBasketAndPrice(customer);
    buyItems(customer);
}
