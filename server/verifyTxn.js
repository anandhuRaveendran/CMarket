const { ClientApplication } = require('./routes/client');

let userClient = new ClientApplication();
userClient.submitTxn(
    "certifyingAuth",
    "carbonchain",
    "carbonchain",
    "CarbonCreditContract",
    "invokeTxn",
    "",
    "verifyCredit",
    "co126",
    "certifyingAuthMSP"
    
).then(result => {
    console.log(new TextDecoder().decode(result))
    console.log("Credit successfully created")
})