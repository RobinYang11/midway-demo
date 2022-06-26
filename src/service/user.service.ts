import { Inject, Provide } from '@midwayjs/decorator';
import { UserModel } from '../model/user.model';

@Provide()
export class UserService {

  @Inject()
  userModal:UserModel;
  async getUser(username,password) {
   return await this.userModal.getUserByUsernameAndPassword(username,password);
  }
}
