const emulationOfPurchaseItemsWithCallBack = require('./components/functions/emulationOfPurchaseItemsWithCallback');
const emulationOfPurchaseItemsWithPromises = require('./components/functions/emulationOfPurchaseItemWithPromises');
const findInfoAboutUserUsingCallback = require('./components/functions/findInfoAboutUserUsingCallback');
const addItemToBasketUsingCallback = require('./components/functions/addItemToBasketUsingCallBack');
const outputBasketAndPrice = require('./components/functions/outputBasketAndPrice');
const buyItems = require('./components/functions/buyItems');

console.log('------ Emulation of purchase the items with using Callback ------');
emulationOfPurchaseItemsWithCallBack(findInfoAboutUserUsingCallback, addItemToBasketUsingCallback, outputBasketAndPrice, buyItems);

console.log('------ Emulation of purchase the items with using Promises ------');
emulationOfPurchaseItemsWithPromises();

