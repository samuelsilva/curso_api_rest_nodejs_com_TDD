const request = require('supertest');

const app = require("../src/app");

describe("Testando app", () => {
    it("Deve responder na raiz",() => {
        return request(app).get('/')
            .then((res) => {
                expect(res.status).toBe(200);
            });
    });
});