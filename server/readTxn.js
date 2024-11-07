const { ClientApplication } = require('./routes/client');

let userClient = new ClientApplication();
userClient.submitTxn(
    "farmer",
    "carbonchain",
    "carbonchain",
    "CarbonCreditContract",
    "invokeTxn",
    "",
    "readCredit",
    "co123"
).then(result => {
    console.log(new TextDecoder().decode(result))
    console.log("Credit successfully created")
})