
import { createApp, close, createHttpRequest } from '@midwayjs/mock';
import { Framework } from '@midwayjs/koa';

describe('test/controller/home.user.ts', () => {

  it('should GET /api/user/login', async () => {
    // create app
    const app = await createApp<Framework>();

    // make request
    const result = await createHttpRequest(app)
    .post("/api/user/login")
    .send({
      username:"jack",
      password:"redballoon"
    })

    // use expect by jest
    expect(result.status).toBe(200);
    // close app
    await close(app);
  });

});
