
import supertest from 'supertest'
import app from '../index'

const requestUrl = supertest(app)
describe("test endpoint responce", function () {
    it("gets the api endpoint", async function (done) {
        const responce = await requestUrl.get('/api/image');
        expect(responce.status).toBe(200);
        done();
    });
});



