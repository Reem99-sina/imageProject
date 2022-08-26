import supertest from 'supertest';
import app from '../index';

const request = supertest(app);
console.log(request);
describe('Test endpoint responses', () => {
  it('gets the api endpoint', async function() {
    const response = await request.get('/api/image');
    expect(response.status).toBe(200);
  });
});
// it('expect myFunc(5) to equal 25', () => {
//     expect(funcvs(5)).toEqual(25);
// });
