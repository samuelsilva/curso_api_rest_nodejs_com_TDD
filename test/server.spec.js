const supertest = require('supertest');
const request = supertest('http://localhost:3001')

describe("Testando Server",() => {
    test("Deve responder na porta 3001", () => {
        // acessar a url http://localhost:3001
        //request.get('/').then(res => expect(res.status).toBe(200));
        return request.get('/').then(res => expect(res.status).toBe(200));
        // verificar se a resposta foi 200 (status code => sucesso)
    });
});