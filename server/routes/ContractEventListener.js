const {EventListener} = require('./events')

let FarmerEvent = new EventListener();

FarmerEvent.contractEventListener("farmer","carbonchain","chaincode-carbon");
