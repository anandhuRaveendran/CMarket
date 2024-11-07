let profile = {
    orderer: {
        "cryptoPath": "../../carbon/organizations/ordererOrganizations/carbon.com",
        "tlsCertPath": "../../carbon/organizations/ordererOrganizations/carbon.com/orderers/orderer.carbon.com/tls/ca.crt",
        "ordererEndpoint": "localhost:7050",
        "mspId": "OrdererMSP"
    },
    farmer: {
        "cryptoPath": "../../carbon/organizations/peerOrganizations/farmer.carbon.com",
        "keyDirectoryPath": "../../carbon/organizations/peerOrganizations/farmer.carbon.com/users/User1@farmer.carbon.com/msp/keystore/",
        "certPath": "../../carbon/organizations/peerOrganizations/farmer.carbon.com/users/User1@farmer.carbon.com/msp/signcerts/cert.pem",
        "tlsCertPath": "../../carbon/organizations/peerOrganizations/farmer.carbon.com/peers/peer0.farmer.carbon.com/tls/ca.crt",
        "peerEndpoint": "localhost:7051",
        "peerHostAlias": "peer0.farmer.carbon.com",
        "mspId": "FarmerMSP"
    },
    buyer: {
        "cryptoPath": "../../carbon/organizations/peerOrganizations/buyer.carbon.com",
        "keyDirectoryPath": "../../carbon/organizations/peerOrganizations/buyer.carbon.com/users/User1@buyer.carbon.com/msp/keystore/",
        "certPath": "../../carbon/organizations/peerOrganizations/buyer.carbon.com/users/User1@buyer.carbon.com/msp/signcerts/cert.pem",
        "tlsCertPath": "../../carbon/organizations/peerOrganizations/buyer.carbon.com/peers/peer0.buyer.carbon.com/tls/ca.crt",
        "peerEndpoint": "localhost:9446",
        "peerHostAlias": "peer0.buyer.carbon.com",
        "mspId": "BuyerMSP"
    },
    certifyingAuth: {
        "cryptoPath": "../../carbon/organizations/peerOrganizations/certifyingAuth.carbon.com",
        "keyDirectoryPath": "../../carbon/organizations/peerOrganizations/certifyingAuth.carbon.com/users/User1@certifyingAuth.carbon.com/msp/keystore/",
        "certPath": "../../carbon/organizations/peerOrganizations/certifyingAuth.carbon.com/users/User1@certifyingAuth.carbon.com/msp/signcerts/cert.pem",
        "tlsCertPath": "../../carbon/organizations/peerOrganizations/certifyingAuth.carbon.com/peers/peer0.certifyingAuth.carbon.com/tls/ca.crt",
        "peerEndpoint": "localhost:10051",
        "peerHostAlias": "peer0.certifyingAuth.carbon.com",
        "mspId": "certifyingAuthMSP"
    },
    regulators: {
        "cryptoPath": "../../carbon/organizations/peerOrganizations/regulators.carbon.com",
        "keyDirectoryPath": "../../carbon/organizations/peerOrganizations/regulators.carbon.com/users/User1@regulators.carbon.com/msp/keystore/",
        "certPath": "../../carbon/organizations/peerOrganizations/regulators.carbon.com/users/User1@regulators.carbon.com/msp/signcerts/cert.pem",
        "tlsCertPath": "../../carbon/organizations/peerOrganizations/regulators.carbon.com/peers/peer0.regulators.carbon.com/tls/ca.crt",
        "peerEndpoint": "localhost:13051",
        "peerHostAlias": "peer0.regulators.carbon.com",
        "mspId": "RegulatorsMSP"
    }
};

module.exports = { profile };
