
import { createApp, close, createHttpRequest } from '@midwayjs/mock';
import { Framework } from '@midwayjs/koa';
import * as assert from 'assert';

describe('test/controller/home.user.ts', () => {

  it('should GET /api/user/login', async () => {
    // create app
    const app = await createApp<Framework>();


    // 添加用户测试用例
    const addUserResult = await createHttpRequest(app)
      .post("/api/user/add")
      .send({
        username: "jack",
        password: "redballoon"
      })

    expect(addUserResult.status).toBe(200);

    //用户登录测试用例
    const result = await createHttpRequest(app)
      .post("/api/user/login")
      .send({
        username: "jack",
        password: "redballoon"
      })

    expect(result.status).toBe(200);
    assert.deepStrictEqual(result.body.code, 200)
    assert.deepStrictEqual(result.body.result, "登录成功")

    await close(app);
  });

});
