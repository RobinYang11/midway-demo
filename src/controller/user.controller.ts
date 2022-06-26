import { Body, Controller, Get, Post, Inject } from "@midwayjs/decorator";
import { UserDto, UserLoginDTO } from "../dto/user.dto";
// import { UserEntity } from "../entity/user.entity";
import { UserModel } from "../model/user.model";

@Controller('/api')
export class UserController {


  @Inject()
  userModel: UserModel;

  // 应该增加个service层，ctroller ->  service ->  model
  // @Inject()
  // userService:UserService 

  @Get('/users')
  async getUser() {
    return { name: "robni" }
  }

  @Post('/user/login')
  async login(@Body() userDto: UserLoginDTO): Promise<Result> {
    try {
      const users = await this.userModel.getUserByUsernameAndPassword(userDto.username, userDto.password);
      if (users.length) {
        const [user] = users;
        // throw new Error("NO SUCH USER!")
        return {
          code: 200,
          message: "登录成功",
          result: "登录成功",
          data: {
            token: user.id
          }
        }
      }
    } catch (e) {
      return {
        code: 500,
        message: e.toString(),
        result: "登录失败"
      }
    }
  }

  @Post('/user/add')
  async addUser(@Body() userDto: UserDto): Promise<Result> {

    try {
      const user = await this.userModel.addUser(userDto)
      // throw new Error("测试异常")
      return {
        code: 200,
        message: "添加成功",
        result: "操作成功",
        data: {
          user
        }
      }
    } catch (e) {
      return {
        code: 500,
        message: e.toString(),
        result: "操作失败",
      }
    }
  }
}