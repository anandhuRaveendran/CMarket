const express = require("express");
const router = express.Router();
const { ClientApplication } = require("./client");

// Route to create a carbon credit
router.post("/createCredit", async (req, res) => {
    try {
        const { creditId, farmerId, description, amount } = req.body;
        let client = new ClientApplication();
        
        const result = await client.submitTxn(
            "farmer",
            "carbonchain",
            "carbonchain",
            "CarbonCreditContract",
            "invokeTxn",
            "",
            "createCredit",
            creditId,
            farmerId,
            description,
            amount
        );

        res.status(201).json({
            success: true,
            message: "Carbon credit created successfully!",
            data: { result },
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error creating carbon credit",
            data: { error },
        });
    }
});

// Route to verify a carbon credit
router.post("/verifyCredit", async (req, res) => {
    try {
        const { creditId, certifyingAuthId } = req.body;
        let client = new ClientApplication();

        const result = await client.submitTxn(
            "certifyingAuth",
            "carbonchain",
            "carbonchain",
            "CarbonCreditContract",
            "invokeTxn",
            "",
            "verifyCredit",
            creditId,
            certifyingAuthId
        );

        res.status(200).json({
            success: true,
            message: "Carbon credit verified successfully!",
            data: { result },
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error verifying carbon credit",
            data: { error },
        });
    }
});

// Route to buy a carbon credit
router.post("/buyCredit", async (req, res) => {
    console.log('hit')
    try {
        const { creditId, buyerId } = req.body;
        let client = new ClientApplication();

        const result = await client.submitTxn(
            "buyer",
            "carbonchain",
            "carbonchain",
            "CarbonCreditContract",
            "invokeTxn",
            "",
            "buyCredit",
            creditId,
            buyerId
        );

        res.status(200).json({
            success: true,
            message: "Carbon credit bought successfully!",
            data: { result },
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error buying carbon credit",
            data: { error },
        });
    }
});
router.post("/getCreditsByFarmer", async (req, res) => {
    console.log('farmer')
    try {
        const { farmerId } = req.body;
        let client = new ClientApplication();

        const result = await client.submitTxn(
            "farmer",
            "carbonchain",
            "carbonchain",
            "CarbonCreditContract",
            "queryTxn",
            "",
            "getCreditsByFarmerId",
            farmerId
        );
        const data = new TextDecoder().decode(result);
        const value = await JSON.parse(data);
        console.log(value)

        res.status(200).json({
            success: true,
            message: `Credits for farmer ${farmerId} fetched successfully!`,
            data:value,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching credits for farmer",
            data: { error },
        });
    }
});

// Route to read a carbon credit
router.post("/readCredit", async (req, res) => {
    try {
        const { creditId } = req.body;
        let client = new ClientApplication();

        const result = await client.submitTxn(
            "farmer",
            "carbonchain",
            "carbonchain",
            "CarbonCreditContract",
            "queryTxn",
            "",
            "readCredit",
            creditId
        );

        const data = new TextDecoder().decode(result);
        const value = JSON.parse(data);

        res.status(200).json({
            success: true,
            message: "Carbon credit read successfully!",
            data: { value },
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error reading carbon credit",
            data: { error },
        });
    }
});
// Route to fetch all carbon credits
router.get("/getAllCredits", async (req, res) => {
    console.log('hit')
    try {
        let client =new ClientApplication();

        const result =await client.submitTxn(
            "farmer",
            "carbonchain",
            "carbonchain",
            "CarbonCreditContract",
            "queryTxn",
            "",
            "getAllCredits"
        );
        console.log(new TextDecoder().decode(result))

        const credits =await JSON.parse(new TextDecoder().decode(result));
        res.status(200).json({
            success: true,
            message: "All carbon credits fetched successfully!",
            data: credits,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching all carbon credits",
            data: { error },
        });
    }
});

module.exports = router;
