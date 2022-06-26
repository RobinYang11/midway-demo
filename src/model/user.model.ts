import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { UserEntity } from "../entity/user.entity";
import { UserDto } from '../dto/user.dto';

@Provide()
export class UserModel {

  @InjectEntityModel(UserEntity)
  userRepo: Repository<UserEntity>;

  async addUser(user: UserDto): Promise<any> {
    return this.userRepo.save(user);
  }
  /**
   * 根据用户名和密码获取用户信息
   * @param username {String} 用户名
   * @param password {String} 用户密码
   */
  async getUserByUsernameAndPassword(username, password): Promise<Array<UserEntity>> {
    const res =  this.userRepo.query(`
     SELECT
       *
     FROM
       user
     WHERE 
        username = "${username}" AND 
        password = "${password}" 
     LIMIT 1
    `,[])
    return res;
  }
}