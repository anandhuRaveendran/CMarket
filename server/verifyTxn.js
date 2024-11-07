const { ClientApplication } = require('./routes/client');

let userClient = new ClientApplication();
userClient.submitTxn(
    "farmer",
    "carbonchain",
    "carbonchain",
    "CarbonCreditContract",
    "invokeTxn",
    "",
    "verifyCredit",
    "co123",
    "certifyingAuthMSP"
    
).then(result => {
    console.log(new TextDecoder().decode(result))
    console.log("Credit successfully created")
})