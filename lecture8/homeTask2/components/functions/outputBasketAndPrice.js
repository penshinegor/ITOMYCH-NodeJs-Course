module.exports = function (customer) {
    console.log('Basket:');
    for (let basketItem of customer.basket) {
        console.log(`\t${basketItem.name}: ${basketItem.price}$`);
    }
    console.log(`Total sum: ${customer.basket.reduce((sum, item) => sum += item.price, 0)}$`);
}