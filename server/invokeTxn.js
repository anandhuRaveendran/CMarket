const { ClientApplication } = require('./routes/client');

let userClient = new ClientApplication();
userClient.submitTxn(
    "farmer",
    "carbonchain",
    "carbonchain",
    "CarbonCreditContract",
    "invokeTxn",
    "",
    "createCredit",
    "co128",
    "anan127",
    "56 ton co2",
    "50"
).then(result => {
    console.log(new TextDecoder().decode(result))
    console.log("Credit successfully created")
})