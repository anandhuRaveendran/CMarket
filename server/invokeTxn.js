const { ClientApplication } = require('./routes/client');

let userClient = new ClientApplication();
userClient.submitTxn(
    "farmer",
    "carbonchain",
    "carbonchain",
    "CarbonCreditContract",
    "invokeTxn",
    "",
    "buyCredit",
    "co123",
    "anan123"
).then(result => {
    console.log(new TextDecoder().decode(result))
    console.log("Credit successfully created")
})