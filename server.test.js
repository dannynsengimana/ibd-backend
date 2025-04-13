// server.test.js
import request from 'supertest';
import app from './server.js';

describe('POST /api/greet', () => {
  it('should return greeting when name is provided', async () => {
    const res = await request(app)
      .post('/api/greet')
      .send({ name: 'Daniel' });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('greeting', 'Hi Daniel, nice to meet you! 👋');
  });

  it('should return 400 if name is missing', async () => {
    const res = await request(app).post('/api/greet').send({});
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty('greeting', 'Please provide a name!');
  });
});
