import supertest from 'supertest';
import app from '../index';

const request = supertest(app);
describe('Test endpoint responses', () => {
  it('gets the api endpoint :status', async () => {
    const response = await request.get('/api');
    expect(response.status).toBe(200);
  });
  it('gets the api endpoint :text', async () => {
    const response = await request.get('/api');
    expect(response.text).toBe('main route');
  });
  it('gets the api/images endpoint', async () => {
    const response = await request.get(
      '/api/images?filename=seaside&width=300&height=300'
    );
    expect(response.status).toBe(200);
  });
});
