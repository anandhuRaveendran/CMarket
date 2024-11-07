// test/carbonChainRoutes.test.js
import chai, { use, request } from "chai";
import chaiHttp from "chai-http";
import app from "../app"; // Replace with your Express app file path
const { expect } = chai;

use(chaiHttp);

describe("Carbon Chain Routes", () => {

    // Test for creating a carbon credit
    describe("POST /createCredit", () => {
        it("should create a new carbon credit", (done) => {
            request(app)
                .post("/createCredit")
                .send({
                    creditId: "CC001",
                    farmerId: "F001",
                    description: "Carbon credit for reforestation",
                    amount: "100"
                })
                .end((err, res) => {
                    expect(res).to.have.status(201);
                    expect(res.body).to.have.property("success", true);
                    expect(res.body.data).to.have.property("result");
                    done();
                });
        });
    });

    // Test for verifying a carbon credit
    describe("POST /verifyCredit", () => {
        it("should verify an existing carbon credit", (done) => {
            request(app)
                .post("/verifyCredit")
                .send({
                    creditId: "CC001",
                    certifyingAuthId: "CA001"
                })
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res.body).to.have.property("success", true);
                    expect(res.body.data).to.have.property("result");
                    done();
                });
        });
    });

    // Test for buying a verified carbon credit
    describe("POST /buyCredit", () => {
        it("should allow a buyer to purchase a verified carbon credit", (done) => {
            request(app)
                .post("/buyCredit")
                .send({
                    creditId: "CC001",
                    buyerId: "B001"
                })
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res.body).to.have.property("success", true);
                    expect(res.body.data).to.have.property("result");
                    done();
                });
        });
    });

    // Test for reading a carbon credit
    describe("POST /readCredit", () => {
        it("should read the details of an existing carbon credit", (done) => {
            request(app)
                .post("/readCredit")
                .send({ creditId: "CC001" })
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res.body).to.have.property("success", true);
                    expect(res.body.data).to.have.property("value");
                    done();
                });
        });
    });
});
