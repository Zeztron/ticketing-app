import request from 'supertest';
import { app } from '../../app';

it('fails when a email that does not exist is supplied', async () => {
  await request(app)
    .post('/api/users/signin')
    .send({
      email: 'test@test.com',
      password: 'password'
    })
    .expect(400);
});

it('fails when an incorrect password is supplied', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({ 
      email: 'blah@blah.com',
      password: 'asdfg'
    })
    .expect(201);

  await request(app)
    .post('/api/users/signin')
    .send({
      email: 'blah@blah.com',
      password: 'sdaksljcs'
    })
    .expect(400);
});

it("responds with a cookie when given valid credentials", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({
      email: "test2@test.com",
      password: "password1",
    })
    .expect(201);

  const response = await request(app)
    .post("/api/users/signin")
    .send({
      email: "test2@test.com",
      password: "password1",
    })
    .expect(200);
  
  expect(response.get('Set-Cookie')).toBeDefined();
});