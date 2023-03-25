const request = require('supertest');
const app = require('./index');

describe('GET /devices', () => {
  it('responds with JSON containing all devices', async () => {
    const response = await request(app).get('/devices');
    expect(response.status).toBe(200);
    expect(response.body.data.length).toBeGreaterThan(0);
  });
});

describe('GET /devices/:id', () => {
    it('responds with JSON containing details of the device with the specified ID', async () => {
      const response = await request(app).get('/devices/1');
      expect(response.status).toBe(200);
      expect(response.body.data).toBeDefined();
      expect(response.body.data.id).toBe(1);
    });
  });

  describe('POST /user', () => {
    it('responds with JSON containing the user data matching the provided username', async () => {
      const response = await request(app)
        .post('/user')
        .send({ username: 'testuser', password: 'testpassword' });
      expect(response.status).toBe(200);
      expect(response.body.data).toBeDefined();
      expect(response.body.data.username).toBe('testuser');
      expect(response.body.data.password).toBe('testpassword');
    });
  });
  